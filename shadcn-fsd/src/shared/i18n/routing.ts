import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ru'],
  defaultLocale: 'ru',
  localePrefix: 'always',
});

export type AppLocale = (typeof routing.locales)[number];
