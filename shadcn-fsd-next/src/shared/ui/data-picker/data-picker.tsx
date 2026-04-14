'use client';

import { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

import { Button, Calendar, Popover } from '@shared-ui';
import { isAppLocale, useDateFormat } from '@shared-libs/date';

import { datePickerLocaleMap } from '@shared-config';

type DataPickerProps = {
  initialValue?: Date;
  onChange?: (date: Date | undefined) => void;
  disabled?: boolean;
  placeholder?: string;
};

export const DataPicker = ({
  initialValue,
  onChange,
  disabled,
  placeholder,
}: DataPickerProps) => {
  const t = useTranslations('uiKit');
  const format = useDateFormat();
  const locale = useLocale();

  if (!isAppLocale(locale)) {
    throw new Error('Unsupported locale');
  }

  const [date, setDate] = useState<Optional<Date>>(initialValue);

  const handleSelect = (date: Date | undefined) => {
    setDate(date);
    onChange?.(date);
  };

  const Trigger = (
    <Button
      variant="outline"
      data-empty={!date}
      disabled={disabled}
      className="data-[empty=true]:text-muted-foreground w-[212px] justify-between text-left font-normal"
    >
      {date ? format(date, 'PPP') : <span>{placeholder ?? t('pickDate')}</span>}
      <ChevronDownIcon />
    </Button>
  );

  const Content = (
    <Calendar
      mode="single"
      selected={date}
      onSelect={handleSelect}
      defaultMonth={date}
      locale={datePickerLocaleMap[locale]}
    />
  );

  return <Popover trigger={Trigger} content={Content} />;
};
