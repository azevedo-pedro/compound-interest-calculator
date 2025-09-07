'use client';

import { useCompoundInterestCalculator } from '@/hooks/useCompoundInterestCalculator';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import StructuredData from '@/components/StructuredData';

export default function Home() {
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations();
  const {
    initialValue,
    monthlyValue,
    interestRate,
    period,
    result,
    errors,
    calculateCompoundInterest,
    clearForm,
    formatCurrency,
    parseValueInput,
    updateInitialValue,
    updateMonthlyValue,
    updateInterestRate,
    updatePeriod,
  } = useCompoundInterestCalculator();

  const handleLanguageChange = (newLocale: string) => {
    router.push(`/${newLocale}`);
  };

  return (
    <>
      <StructuredData />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2 transition-colors duration-300">
            {t('title')}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
            {t('subtitle')}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8 transition-colors duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors duration-300">
            {t('form.title')}
          </h2>
          
          {errors.general && (
            <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg">
              <p className="text-sm text-red-600 dark:text-red-400 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.general}
              </p>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                {t('form.initialValue.label')}
              </label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-500 dark:text-gray-400">R$</span>
                <input
                  type="text"
                  value={initialValue}
                  onChange={(e) => updateInitialValue(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 text-lg bg-white dark:bg-gray-700 transition-colors duration-300 ${
                    errors.initialValue 
                      ? 'border-red-500 dark:border-red-500 focus:ring-red-500 focus:border-red-500 text-red-900 dark:text-red-100' 
                      : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-white'
                  }`}
                  placeholder={t('form.initialValue.placeholder')}
                />
                {errors.initialValue && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.initialValue}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                {t('form.monthlyValue.label')}
              </label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-500 dark:text-gray-400">R$</span>
                <input
                  type="text"
                  value={monthlyValue}
                  onChange={(e) => updateMonthlyValue(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 text-lg bg-white dark:bg-gray-700 transition-colors duration-300 ${
                    errors.monthlyValue 
                      ? 'border-red-500 dark:border-red-500 focus:ring-red-500 focus:border-red-500 text-red-900 dark:text-red-100' 
                      : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-white'
                  }`}
                  placeholder={t('form.monthlyValue.placeholder')}
                />
                {errors.monthlyValue && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.monthlyValue}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                {t('form.interestRate.label')}
              </label>
              <div className="relative">
                <span className="absolute right-3 top-3 text-gray-500 dark:text-gray-400">%</span>
                <input
                  type="text"
                  value={interestRate}
                  onChange={(e) => updateInterestRate(e.target.value)}
                  className={`w-full pl-4 pr-10 py-3 border rounded-lg focus:ring-2 text-lg bg-white dark:bg-gray-700 transition-colors duration-300 ${
                    errors.interestRate 
                      ? 'border-red-500 dark:border-red-500 focus:ring-red-500 focus:border-red-500 text-red-900 dark:text-red-100' 
                      : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-white'
                  }`}
                  placeholder={t('form.interestRate.placeholder')}
                />
                {errors.interestRate && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.interestRate}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                {t('form.period.label')}
              </label>
              <input
                type="text"
                value={period}
                onChange={(e) => updatePeriod(e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 text-lg bg-white dark:bg-gray-700 transition-colors duration-300 ${
                  errors.period 
                    ? 'border-red-500 dark:border-red-500 focus:ring-red-500 focus:border-red-500 text-red-900 dark:text-red-100' 
                    : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-white'
                }`}
                placeholder={t('form.period.placeholder')}
              />
              {errors.period && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.period}
                </p>
              )}
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {t('form.period.helper')}
              </p>
            </div>
          </div>

          <div className="flex gap-3 pt-6">
            <button
              onClick={calculateCompoundInterest}
              className="flex-1 font-semibold py-3 px-6 rounded-lg transition duration-200 ease-in-out transform bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white hover:scale-105"
            >
              {t('form.calculate')}
            </button>
            <button
              onClick={clearForm}
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              {t('form.clear')}
            </button>
          </div>
        </div>

        {result && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-green-500 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">{t('results.finalAmount.title')}</h3>
                <p className="text-3xl font-bold text-green-600 dark:text-green-400">{formatCurrency(result.finalAmount)}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  {t('results.finalAmount.description', { months: result.monthlyBreakdown.length })}
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-blue-500 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">{t('results.totalContributed.title')}</h3>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{formatCurrency(result.totalContributed)}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  {t('results.totalContributed.description')}
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-purple-500 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">{t('results.totalInterest.title')}</h3>
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{formatCurrency(result.totalInterest)}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  {t('results.totalInterest.description')}
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-yellow-500 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">{t('results.returnRate.title')}</h3>
                <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{result.returnRate.toFixed(2)}%</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  {t('results.returnRate.description')}
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-300">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">{t('results.evolution.title')}</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>{t('results.evolution.period', { months: result.monthlyBreakdown.length })}</span>
                  <span>{t('results.evolution.monthlyRate', { rate: (parseValueInput(interestRate) / 12).toFixed(2) })}</span>
                </div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-500"
                    style={{
                      width: `${Math.min((result.totalInterest / result.finalAmount) * 100, 100)}%`
                    }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>{t('results.evolution.contributions', { percentage: ((result.totalContributed / result.finalAmount) * 100).toFixed(1) })}</span>
                  <span>{t('results.evolution.interest', { percentage: ((result.totalInterest / result.finalAmount) * 100).toFixed(1) })}</span>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">{t('results.evolution.averageMonthly')}</div>
                  <div className="text-lg font-semibold text-blue-700 dark:text-blue-300">
                    {formatCurrency(result.finalAmount / result.monthlyBreakdown.length)}
                  </div>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                  <div className="text-sm text-green-600 dark:text-green-400 font-medium">{t('results.evolution.averageInterest')}</div>
                  <div className="text-lg font-semibold text-green-700 dark:text-green-300">
                    {formatCurrency(result.totalInterest / result.monthlyBreakdown.length)}
                  </div>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                  <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">{t('results.evolution.totalGrowth')}</div>
                  <div className="text-lg font-semibold text-purple-700 dark:text-purple-300">
                    {((result.finalAmount / result.totalContributed - 1) * 100).toFixed(2)}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Additional Info */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-colors duration-300">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">{t('explanation.title')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-green-600 dark:text-green-400">{t('explanation.compoundInterest.title')}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {t('explanation.compoundInterest.description')}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {t('explanation.compoundInterest.example')}
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-blue-600 dark:text-blue-400">{t('explanation.monthlyContributions.title')}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {t('explanation.monthlyContributions.description')}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {t('explanation.monthlyContributions.example')}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-purple-600 dark:text-purple-400">{t('explanation.annualRate.title')}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {t('explanation.annualRate.description')}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {t('explanation.annualRate.example')}
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-semibold text-yellow-600 dark:text-yellow-400">{t('explanation.timepower.title')}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {t('explanation.timepower.description')}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {t('explanation.timepower.example')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Language Select */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mt-8 transition-colors duration-300">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-4">
              <label htmlFor="language-select" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {t('locationSelect.label')}:
              </label>
              <select
                id="language-select"
                onChange={(e) => handleLanguageChange(e.target.value)}
                value={locale}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-white bg-white dark:bg-gray-700 transition-colors duration-300"
              >
                <option value="en">{t('locationSelect.english')}</option>
                <option value="pt">{t('locationSelect.portuguese')}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
