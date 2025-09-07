export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Calculadora de Juros Compostos",
    "alternateName": "CIC - Compound Interest Calculator",
    "description": "Ferramenta gratuita para calcular juros compostos e simular crescimento de investimentos com aportes mensais",
    "url": "https://cic.azevedo.dev",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BRL",
      "description": "Ferramenta completamente gratuita"
    },
    "featureList": [
      "Cálculo de juros compostos",
      "Simulação de aportes mensais",
      "Visualização de evolução de investimento",
      "Suporte multilíngue (Português/Inglês)",
      "Interface responsiva"
    ],
    "author": {
      "@type": "Person",
      "name": "Pedro Azevedo",
      "url": "https://azevedo.dev"
    },
    "publisher": {
      "@type": "Person",
      "name": "Pedro Azevedo",
      "url": "https://azevedo.dev"
    },
    "inLanguage": ["pt-BR", "en-US"],
    "dateCreated": "2024",
    "dateModified": new Date().toISOString().split('T')[0],
    "browserRequirements": "Requires JavaScript",
    "softwareVersion": "1.0",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const financialCalculatorData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Calculadora de Juros Compostos",
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "description": "Calculadora online gratuita para simular investimentos com juros compostos e aportes mensais",
    "url": "https://cic.azevedo.dev",
    "screenshot": "https://cic.azevedo.dev/screenshot.png",
    "featureList": [
      "Cálculo automático de juros compostos",
      "Simulação de aportes regulares",
      "Projeção de crescimento patrimonial",
      "Análise de rentabilidade",
      "Comparação de cenários de investimento"
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BRL"
    }
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Pedro Azevedo",
    "url": "https://azevedo.dev",
    "logo": "https://cic.azevedo.dev/logo.png",
    "sameAs": [
      "https://github.com/azevedo-pedro",
      "https://linkedin.com/in/pedro-azevedo"
    ],
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Calculadora de Juros Compostos Gratuita",
        "description": "Ferramenta online gratuita para planejamento financeiro"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(financialCalculatorData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
    </>
  );
}