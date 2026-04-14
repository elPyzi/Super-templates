import * as React from 'react';

import { FieldLabel } from '@shared-ui';
import { cn } from '@shared-libs/shadcn';

import {
  SelectContent,
  SelectCore,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './shadcn-select';

import { Field, FieldError } from '@/shared/ui/field/field';

type SelectClassNames = {
  fieldClassName?: string;
  labelClassName?: string;
  triggerClassName?: string;
  contentClassName?: string;
  itemClassName?: string;
  errorClassName?: string;
};

type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

type SelectProps = {
  options: SelectOption[];
  disabled?: boolean;
  value?: string;
  defaultValue?: string;
  onChangeValue?: (value: string) => void;
  groupLabel?: string;
  placeholder?: string;
  label?: string;
  error?: string;
  classes?: SelectClassNames;
  colon?: boolean;
  required?: boolean;
};

export const Select = ({
  label,
  disabled = false,
  placeholder,
  groupLabel,
  options,
  error,
  value,
  onChangeValue,
  defaultValue,
  classes,
  colon = false,
  required = false,
  ...props
}: SelectProps) => {
  const isInvalid = !!error;

  return (
    <Field className={classes?.fieldClassName}>
      {label && (
        <FieldLabel className={classes?.labelClassName}>
          {`${label}${colon ? ':' : ''}`}
          {required && <span className="text-destructive">*</span>}
        </FieldLabel>
      )}

      <SelectCore
        value={value}
        defaultValue={defaultValue}
        onValueChange={onChangeValue}
        disabled={disabled}
        {...props}
      >
        <SelectTrigger
          className={cn(
            classes?.triggerClassName,
            isInvalid && 'border-[var(--destructive)] text-destructive',
          )}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent className={classes?.contentClassName}>
          <SelectGroup>
            {groupLabel && <SelectLabel>{groupLabel}</SelectLabel>}

            {options.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                disabled={option.disabled}
                className={classes?.itemClassName}
                aria-invalid={isInvalid}
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </SelectCore>

      {error && (
        <FieldError className={classes?.errorClassName}>{error}</FieldError>
      )}
    </Field>
  );
};
