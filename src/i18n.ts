import {getRequestConfig} from 'next-intl/server';

// Can be imported from a shared config
const locales = ['en', 'pt'] as const;

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  // If invalid, fallback to default locale instead of calling notFound()
  const validLocale = locales.includes(locale as typeof locales[number]) 
    ? locale as typeof locales[number]
    : 'pt'; // Default to Portuguese if locale is invalid
  console.log(locale)
  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default
  };
});