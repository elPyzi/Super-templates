import type { Locale } from 'date-fns';
import { format as dateFnsFormat } from 'date-fns';
import { eo, ru } from 'date-fns/locale';
import { useLocale } from 'next-intl';

import { isAppLocale } from './isAppLocale';

const locales: Record<string, Locale> = {
  eo,
  ru,
};

export const useDateFormat = () => {
  const locale = useLocale();

  if (!isAppLocale(locale)) {
    throw new Error(`Unsupported locale: ${locale}`);
  }

  return (date: Date, formatStr = 'PP') =>
    dateFnsFormat(date, formatStr, {
      locale: locales[locale],
    });
};
