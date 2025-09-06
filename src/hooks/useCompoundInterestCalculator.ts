import { useState } from 'react';
import { useTranslations } from 'next-intl';

export interface CalculationResult {
  finalAmount: number;
  totalInterest: number;
  totalContributed: number;
  returnRate: number;
  monthlyBreakdown: {
    month: number;
    contribution: number;
    interest: number;
    balance: number;
  }[];
}

export const useCompoundInterestCalculator = () => {
  const t = useTranslations('errors');
  const [initialValue, setInitialValue] = useState<string>('');
  const [monthlyValue, setMonthlyValue] = useState<string>('');
  const [interestRate, setInterestRate] = useState<string>('');
  const [period, setPeriod] = useState<string>('');
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const parseValueInput = (value: string): number => {
    if (!value || value.trim() === '') {
      return 0;
    }
    
    // Handle Brazilian number format (7.855,77) and international format (7,855.77)
    let cleanInput = value.trim();
    
    // Remove any currency symbols and spaces
    cleanInput = cleanInput.replace(/[R$\s]/g, '');
    
    // Check if it's Brazilian format (dots for thousands, comma for decimal)
    if (cleanInput.includes(',') && cleanInput.lastIndexOf(',') > cleanInput.lastIndexOf('.')) {
      // Brazilian format: 7.855,77
      cleanInput = cleanInput.replace(/\./g, '').replace(',', '.');
    } else if (cleanInput.includes('.') && cleanInput.includes(',') && cleanInput.lastIndexOf('.') > cleanInput.lastIndexOf(',')) {
      // International format: 7,855.77
      cleanInput = cleanInput.replace(/,/g, '');
    } else if (cleanInput.includes(',') && !cleanInput.includes('.')) {
      // Only comma, assume it's decimal separator: 7855,77
      cleanInput = cleanInput.replace(',', '.');
    }
    // If only dots or no separators, assume it's already in correct format
    
    const parsed = parseFloat(cleanInput);
    return isNaN(parsed) ? 0 : parsed;
  };

  const formatValueForInput = (value: number): string => {
    if (isNaN(value) || !isFinite(value)) {
      return '0,00';
    }
    return value.toLocaleString('pt-BR', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    });
  };

  const formatCurrency = (value: number): string => {
    if (isNaN(value) || !isFinite(value)) {
      return 'R$ 0,00';
    }
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const validateInputs = (): boolean => {
    const newErrors: {[key: string]: string} = {};
    
    const initial = parseValueInput(initialValue);
    const monthly = parseValueInput(monthlyValue);
    const rate = parseValueInput(interestRate);
    const totalMonths = parseInt(period) || 0;
    
    if (initial < 0) {
      newErrors.initialValue = t('initialValue');
    }
    
    if (monthly < 0) {
      newErrors.monthlyValue = t('monthlyValue');
    }
    
    if (initial === 0 && monthly === 0) {
      newErrors.general = t('general');
    }
    
    if (rate <= 0) {
      newErrors.interestRate = t('interestRate.required');
    }
    
    if (rate > 100) {
      newErrors.interestRate = t('interestRate.max');
    }
    
    if (totalMonths <= 0) {
      newErrors.period = t('period.required');
    }
    
    if (totalMonths > 600) {
      newErrors.period = t('period.max');
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateCompoundInterest = (): void => {
    if (!validateInputs()) {
      setResult(null);
      return;
    }

    const initial = parseValueInput(initialValue);
    const monthly = parseValueInput(monthlyValue);
    const rate = parseValueInput(interestRate) / 100 / 12; // Monthly rate
    const totalMonths = parseInt(period) || 0;

    let balance = initial;
    const monthlyBreakdown = [];
    let totalContributed = initial;

    for (let month = 1; month <= totalMonths; month++) {
      const interest = balance * rate;
      balance += interest + monthly;
      totalContributed += monthly;
      
      monthlyBreakdown.push({
        month,
        contribution: monthly,
        interest,
        balance
      });
    }

    const finalAmount = balance;
    const totalInterest = finalAmount - totalContributed;
    const returnRate = totalContributed > 0 ? (totalInterest / totalContributed) * 100 : 0;

    setResult({
      finalAmount,
      totalInterest,
      totalContributed,
      returnRate,
      monthlyBreakdown
    });
  };

  const clearForm = (): void => {
    setInitialValue('');
    setMonthlyValue('');
    setInterestRate('');
    setPeriod('');
    setResult(null);
    setErrors({});
  };

  const updateInitialValue = (value: string): void => {
    setInitialValue(value);
    if (errors.initialValue || errors.general) {
      const newErrors = { ...errors };
      delete newErrors.initialValue;
      delete newErrors.general;
      setErrors(newErrors);
    }
  };

  const updateMonthlyValue = (value: string): void => {
    setMonthlyValue(value);
    if (errors.monthlyValue || errors.general) {
      const newErrors = { ...errors };
      delete newErrors.monthlyValue;
      delete newErrors.general;
      setErrors(newErrors);
    }
  };

  const updateInterestRate = (value: string): void => {
    setInterestRate(value);
    if (errors.interestRate) {
      const newErrors = { ...errors };
      delete newErrors.interestRate;
      setErrors(newErrors);
    }
  };

  const updatePeriod = (value: string): void => {
    setPeriod(value);
    if (errors.period) {
      const newErrors = { ...errors };
      delete newErrors.period;
      setErrors(newErrors);
    }
  };

  return {
    // Values
    initialValue,
    monthlyValue,
    interestRate,
    period,
    result,
    errors,
    
    // Functions
    calculateCompoundInterest,
    clearForm,
    formatCurrency,
    formatValueForInput,
    parseValueInput,
    
    // Updaters
    updateInitialValue,
    updateMonthlyValue,
    updateInterestRate,
    updatePeriod,
  };
};