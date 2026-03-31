import * as React from 'react';
import { ReactNode, useId } from 'react';

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
  Label,
} from '@shared-ui';
import { cn } from '@shared-libs/shadcn';

import { RadioGroupCore, RadioGroupItem } from './shadcn-radio';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

type RadioClassNames = {
  radioWrapperClassName: string;
  labelClassName: string;
  errorClassName: string;
  descriptionClassName: string;
  radioCoreClassName: string;
  radioOptionClassName: string;
};

type RadioOption = {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
};

type RadioGroupProps = React.ComponentProps<typeof RadioGroupPrimitive.Root> & {
  options: RadioOption[];
  label?: string;
  value?: string;
  defaultValue?: string;
  orientation?: 'horizontal' | 'vertical';
  disabled?: boolean;
  onValueChangeAction?: (value: string) => void;
  description?: ReactNode;
  required?: boolean;
  colon?: boolean;
  error?: ReactNode;
  classes?: Partial<RadioClassNames>;
};

export const RadioGroup = ({
  options,
  value,
  onValueChangeAction,
  defaultValue,
  orientation = 'vertical',
  disabled = false,
  label,
  colon = false,
  required = false,
  description,
  error,
  classes,
}: RadioGroupProps) => {
  const id = useId();
  const isInvalid = !!error;

  return (
    <Field className={classes?.radioWrapperClassName}>
      {label && (
        <FieldLabel id={id} className={classes?.labelClassName}>
          {`${label}${colon ? ':' : ''}`}
          {required && <span className="text-destructive">*</span>}
        </FieldLabel>
      )}
      {description && (
        <FieldDescription id={id} className={classes?.descriptionClassName}>
          {description}
        </FieldDescription>
      )}
      <RadioGroupCore
        id={id}
        className={cn(
          orientation === 'horizontal' ? 'flex gap-6' : 'grid gap-3',
          classes?.radioCoreClassName,
        )}
        value={value}
        onValueChange={onValueChangeAction}
        defaultValue={defaultValue}
        disabled={disabled}
      >
        {options.map((option) => (
          <div key={option.value} className="flex items-center space-x-2">
            <RadioGroupItem
              value={option.value}
              id={option.value}
              disabled={option.disabled}
              className={classes?.radioOptionClassName}
              aria-invalid={isInvalid}
            />
            <Label htmlFor={option.value}>{option.label}</Label>
          </div>
        ))}
      </RadioGroupCore>
      {error && (
        <FieldError className={classes?.errorClassName}>{error}</FieldError>
      )}
    </Field>
  );
};
