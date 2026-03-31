import { AppLocale, routing } from '@i18n';

export const isAppLocale = (value: string): value is AppLocale =>
  routing.locales.includes(value as AppLocale);
