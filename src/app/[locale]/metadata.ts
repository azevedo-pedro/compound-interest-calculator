import { Metadata } from 'next'

type LocaleMetadata = {
  [key: string]: Metadata
}

export const localeMetadata: LocaleMetadata = {
  pt: {
    title: "Calculadora de Juros Compostos | CIC - Ferramenta Gratuita de Investimentos",
    description: "Calcule o crescimento dos seus investimentos com juros compostos e aportes mensais. Ferramenta gratuita e completa para planejamento financeiro e simulação de investimentos.",
    keywords: "calculadora juros compostos, investimentos, planejamento financeiro, simulação investimento, aportes mensais, rentabilidade, calculadora financeira, investir dinheiro, poupança",
    openGraph: {
      title: "Calculadora de Juros Compostos | CIC",
      description: "Calcule o crescimento dos seus investimentos com juros compostos e aportes mensais. Ferramenta gratuita e completa para planejamento financeiro.",
      url: 'https://cic.azevedo.dev/pt',
      locale: 'pt_BR',
    },
    alternates: {
      canonical: '/pt',
      languages: {
        'en-US': '/en',
        'pt-BR': '/pt',
      },
    },
  },
  en: {
    title: "Compound Interest Calculator | CIC - Free Investment Tool",
    description: "Calculate your investment growth with compound interest and monthly contributions. Free and complete tool for financial planning and investment simulation.",
    keywords: "compound interest calculator, investments, financial planning, investment simulation, monthly contributions, profitability, financial calculator, invest money, savings",
    openGraph: {
      title: "Compound Interest Calculator | CIC",
      description: "Calculate your investment growth with compound interest and monthly contributions. Free and complete tool for financial planning.",
      url: 'https://cic.azevedo.dev/en',
      locale: 'en_US',
    },
    alternates: {
      canonical: '/en',
      languages: {
        'en-US': '/en',
        'pt-BR': '/pt',
      },
    },
  },
}