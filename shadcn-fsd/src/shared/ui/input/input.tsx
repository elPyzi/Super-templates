'use client';

import { ComponentProps, ReactNode, useId, useState } from 'react';
import { Eye, EyeClosed } from 'lucide-react';

import { Field, FieldDescription, FieldError, FieldLabel } from '@shared-ui';
import { cn } from '@shared-libs/shadcn';

type InputClassNames = {
  inputWrapperClassName: string;
  labelClassName: string;
  errorClassName: string;
  descriptionClassName: string;
  inputClassName: string;
};

type InputProps = ComponentProps<'input'> & {
  label?: ReactNode;
  error?: ReactNode;
  description?: ReactNode;
  classes?: Partial<InputClassNames>;
  required?: boolean;
  colon?: boolean;
};

export const Input = ({
  classes,
  type,
  label,
  error,
  description,
  required = false,
  colon = false,
  ...props
}: InputProps) => {
  const id = useId();
  const isInvalid = !!error;

  return (
    <Field className={classes?.inputWrapperClassName}>
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
      <input
        id={id}
        type={type}
        data-slot="input"
        className={cn(
          'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
          'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
          classes?.inputClassName,
        )}
        aria-invalid={isInvalid}
        {...props}
      />
      {error && (
        <FieldError id={id} className={classes?.errorClassName}>
          {error}
        </FieldError>
      )}
    </Field>
  );
};

export const PasswordInput = ({
  classes,
  label,
  error,
  description,
  required = false,
  colon = false,
  ...props
}: InputProps) => {
  const id = useId();
  const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false);
  const isInvalid = !!error;

  const toggleVisiblePassword = () => setPasswordVisible((prev) => !prev);

  return (
    <Field className={classes?.inputWrapperClassName}>
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

      <div className="relative">
        <input
          id={id}
          type={isPasswordVisible ? 'text' : 'password'}
          data-slot="input"
          className={cn(
            'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
            'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
            classes?.inputClassName,
          )}
          aria-invalid={isInvalid}
          {...props}
        />

        <button
          type="button"
          onClick={toggleVisiblePassword}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
        >
          {isPasswordVisible ? <Eye /> : <EyeClosed />}
        </button>
      </div>
      {error && (
        <FieldError id={id} className={classes?.errorClassName}>
          {error}
        </FieldError>
      )}
    </Field>
  );
};
type NumberInputProps = Omit<InputProps, 'value' | 'onChange'> & {
  min?: number;
  max?: number;
  positive?: boolean;
  negative?: boolean;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
};

export const NumberInput = ({
  min,
  max,
  positive,
  negative,
  defaultValue = '',
  onValueChange,
  ...props
}: NumberInputProps) => {
  const [value, setValue] = useState<string>(defaultValue);

  const isValid = (next: string): boolean => {
    if (next === '') return true;

    if (next === '-' || next === '.') return true;

    const num = Number(next);
    if (Number.isNaN(num)) return false;

    if (positive && num < 0) return false;
    if (negative && num > 0) return false;
    if (min !== undefined && num < min) return false;
    if (max !== undefined && num > max) return false;

    return true;
  };

  const handleBeforeInput = (e: React.FormEvent<HTMLInputElement>): void => {
    const event = e as unknown as InputEvent;

    if (event.data && /[^0-9.-]/.test(event.data)) {
      e.preventDefault();
    }
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const next = e.target.value;

    if (!isValid(next)) {
      return;
    }

    setValue(next);
    onValueChange?.(next);
  };

  return (
    <Input
      {...props}
      value={value}
      onBeforeInput={handleBeforeInput}
      onChange={handleChange}
    />
  );
};
