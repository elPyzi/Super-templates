'use client';

import * as React from 'react';
import { ReactNode, useId } from 'react';
import { OTPInput, OTPInputContext } from 'input-otp';

import { cn } from '@shared-libs/shadcn/utils';

import { Field, FieldDescription, FieldError, FieldLabel } from '@/shared/ui';

function InputOTPCore({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string;
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        'flex items-center gap-2 has-disabled:opacity-50',
        containerClassName,
      )}
      className={cn('disabled:cursor-not-allowed', className)}
      {...props}
    />
  );
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn('flex items-center', className)}
      {...props}
    />
  );
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<'div'> & {
  index: number;
}) {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        'data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]',
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink bg-foreground h-4 w-px duration-1000" />
        </div>
      )}
    </div>
  );
}

type InputOTPClassNames = {
  wrapperInputOTPClassName?: string;
  slotInputOTPClassName?: string;
  labelClassName?: string;
  descriptionClassName?: string;
  errorClassName?: string;
};

type InputOTPProps = {
  OTPLength: number;
  classes?: Partial<InputOTPClassNames>;
  error?: ReactNode;
  label?: string;
  required?: boolean;
  description?: ReactNode;
};

export const InputOTP = ({
  OTPLength = 6,
  classes,
  error,
  label,
  required = false,
  description,
  ...props
}: InputOTPProps) => {
  const isInvalid = !!error;
  const id = useId();

  return (
    <Field>
      {label && (
        <FieldLabel id={id} className={classes?.labelClassName}>
          {label}
          {required && <span className="text-destructive">*</span>}
        </FieldLabel>
      )}
      {description && (
        <FieldDescription id={id} className={classes?.descriptionClassName}>
          {description}
        </FieldDescription>
      )}
      <InputOTPCore
        maxLength={OTPLength}
        className={classes?.wrapperInputOTPClassName}
        {...props}
      >
        <InputOTPGroup>
          {[...Array(OTPLength)].map((_, index) => (
            <InputOTPSlot
              key={index}
              index={index}
              className={classes?.slotInputOTPClassName}
              aria-invalid={isInvalid}
            />
          ))}
        </InputOTPGroup>
      </InputOTPCore>
      {error && (
        <FieldError id={id} className={classes?.errorClassName}>
          {error}
        </FieldError>
      )}
    </Field>
  );
};
