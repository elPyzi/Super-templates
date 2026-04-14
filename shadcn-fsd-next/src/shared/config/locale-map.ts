import {
  enUS as enDayPicker,
  ru as ruDayPicker,
} from 'react-day-picker/locale';
import type { Locale as DateFnsLocale } from 'date-fns';
import { enUS as enDateFns, ru as ruDateFns } from 'date-fns/locale';

import type { AppLocale } from '@i18n';

export const dateFnsLocaleMap: Record<AppLocale, DateFnsLocale> = {
  en: enDateFns,
  ru: ruDateFns,
};

export const datePickerLocaleMap: Record<AppLocale, typeof enDayPicker> = {
  en: enDayPicker,
  ru: ruDayPicker,
};
