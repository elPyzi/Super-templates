import * as React from 'react';
import { ReactNode, useId } from 'react';

import { NativeSelectCore, NativeSelectOption } from './shadcn-native-select';

import { Field, FieldDescription, FieldError, FieldLabel } from '@/shared/ui';

type NativeSelectClassNames = {
  wrapperClassName: string;
  selectClassName: string;
  optionClassName: string;
  errorClassName: string;
  labelClassName: string;
  descriptionClassName: string;
};

type Option = {
  value: string;
  label: ReactNode;
  disabled?: boolean;
};

type NativeSelectProps = Omit<React.ComponentProps<'select'>, 'size'> & {
  size?: 'sm' | 'default';
} & {
  options: Option[];
  label?: string;
  error?: ReactNode;
  disabled?: boolean;
  classes?: Partial<NativeSelectClassNames>;
  required?: boolean;
  colon?: boolean;
  description?: ReactNode;
};

export const NativeSelect = ({
  options,
  label,
  error,
  disabled,
  classes,
  required = false,
  colon = false,
  description,
  ...props
}: NativeSelectProps) => {
  const id = useId();
  const isInvalid = !!error;

  return (
    <Field className={classes?.wrapperClassName}>
      {label && (
        <FieldLabel className={classes?.labelClassName} htmlFor={id}>
          {`${label}${colon ? ':' : ''}`}
          {required && <span className="text-destructive">*</span>}
        </FieldLabel>
      )}
      {description && (
        <FieldDescription id={id} className={classes?.descriptionClassName}>
          {description}
        </FieldDescription>
      )}
      <NativeSelectCore
        disabled={disabled}
        className={classes?.selectClassName}
        id={id}
        aria-invalid={isInvalid}
        {...props}
      >
        {options.map((option) => (
          <NativeSelectOption
            key={option.value}
            value={option.value}
            disabled={option.disabled}
            className={classes?.optionClassName}
          >
            {option.value}
          </NativeSelectOption>
        ))}
      </NativeSelectCore>
      {error && (
        <FieldError className={classes?.errorClassName}>{error}</FieldError>
      )}
    </Field>
  );
};
