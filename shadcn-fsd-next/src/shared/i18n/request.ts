import { hasLocale } from 'next-intl';
import { getRequestConfig, setRequestLocale } from 'next-intl/server';

import { routing } from './routing';

const translations = {
  ru: async () => await import('@translation/ru'),
  en: async () => await import('@translation/en'),
};

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const messages = (await translations[locale]()).default;

  setRequestLocale(locale);

  return {
    locale,
    messages,
  };
});
