'use client';

import { ReactNode, useId, useState } from 'react';

import { Label } from '@shared-ui';
import { cn } from '@shared-libs/shadcn';

import { Checkbox } from './shadcn-checkbox.client';

import { Field, FieldError } from '@/shared/ui/field/field';

type CheckboxGroupClassNames = {
  labelClassName: string;
  checkboxGroupClassName: string;
  checkboxLabelClassName: string;
  checkboxClassName: string;
  checkboxGroupContentClassName: string;
  checkboxItemClassName: string;
  errorClassName: string;
};

type CheckboxItem = {
  label: string;
  value: string;
  disabled?: boolean;
};

type CheckboxGroupProps = {
  label: string;
  items: CheckboxItem[];
  value?: string[];
  onChangeValue?: (value: string[]) => void;
  defaultValue?: string[];
  layout?: 'vertical' | 'horizontal';
  classes?: CheckboxGroupClassNames;
  error?: ReactNode;
};

export const CheckboxGroup = ({
  label,
  value,
  defaultValue = [],
  onChangeValue,
  items,
  layout = 'vertical',
  classes,
  error,
}: CheckboxGroupProps) => {
  const groupId = useId();

  const isControlled = value !== undefined;

  const [internalValue, setInternalValue] = useState<string[]>(defaultValue);

  const selectedValues = isControlled ? value : internalValue;

  const updateValue = (value: string[]) => {
    if (!isControlled) {
      setInternalValue(value);
    }

    onChangeValue?.(value);
  };

  const toggleValue = (itemValue: string, checked: boolean) => {
    if (checked) {
      updateValue([...selectedValues, itemValue]);
    } else {
      updateValue(selectedValues.filter((v) => v !== itemValue));
    }
  };

  const isInvalid = !!error;

  return (
    <Field className={classes?.checkboxGroupClassName}>
      {label && (
        <Label
          htmlFor={groupId}
          className={cn('mb-3', classes?.labelClassName)}
        >
          {label}
        </Label>
      )}

      <div
        id={groupId}
        className={cn(
          'flex gap-3',
          layout === 'vertical' ? 'flex-col' : 'flex-row',
          classes?.checkboxGroupContentClassName,
        )}
      >
        {items.map((item) => {
          const checked = selectedValues.includes(item.value);

          return (
            <div
              key={item.value}
              className={cn(
                'flex items-center gap-2',
                classes?.checkboxItemClassName,
              )}
            >
              <Checkbox
                checked={checked}
                disabled={item.disabled}
                className={classes?.checkboxClassName}
                onCheckedChange={(checked) =>
                  toggleValue(item.value, Boolean(checked))
                }
                aria-invalid={isInvalid}
              />

              <Label className={classes?.checkboxLabelClassName}>
                {item.label}
              </Label>
            </div>
          );
        })}
      </div>

      {error && (
        <FieldError id={groupId} className={classes?.errorClassName}>
          {error}
        </FieldError>
      )}
    </Field>
  );
};
