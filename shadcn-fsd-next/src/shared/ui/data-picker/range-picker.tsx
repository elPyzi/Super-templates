'use client';

import { useState } from 'react';
import { type DateRange } from 'react-day-picker';
import { addDays } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

import { Button, Calendar, Popover } from '@shared-ui';
import { isAppLocale, useDateFormat } from '@shared-libs/date';

import { datePickerLocaleMap } from '@shared-config';

type DataPickerProps = {
  initialValueFrom?: Date;
  initialValueTo?: Date;
  disabled?: boolean;
  placeholder?: string;
};

export const RangePicker = ({
  initialValueFrom,
  initialValueTo,
  disabled,
  placeholder,
}: DataPickerProps) => {
  const t = useTranslations('uiKit');
  const format = useDateFormat();
  const locale = useLocale();

  if (!isAppLocale(locale)) {
    throw new Error('Unsupported locale');
  }

  const [date, setDate] = useState<DateRange | undefined>({
    from: initialValueFrom ?? new Date(new Date().getFullYear(), 0, 20),
    to:
      initialValueTo ?? addDays(new Date(new Date().getFullYear(), 0, 20), 20),
  });

  const Trigger = (
    <Button
      variant="outline"
      id="date-picker-range"
      className="justify-start px-2.5 font-normal"
      disabled={disabled}
    >
      <CalendarIcon />
      {date?.from ? (
        date.to ? (
          <>
            {format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}
          </>
        ) : (
          format(date.from, 'LLL dd, y')
        )
      ) : (
        <span>{placeholder ?? t('pickDate')}</span>
      )}
    </Button>
  );

  const Content = (
    <Calendar
      mode="range"
      defaultMonth={date?.from}
      selected={date}
      onSelect={setDate}
      numberOfMonths={2}
      locale={datePickerLocaleMap[locale]}
    />
  );

  return (
    <Popover
      trigger={Trigger}
      content={Content}
      classes={{
        contentClassNames: 'w-auto p-0',
      }}
    />
  );
};
