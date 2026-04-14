import { ComponentProps, ReactNode } from 'react';

import { FieldGroup, FieldLegend, FieldSet } from '../field/field';

type FormProps = ComponentProps<'form'> & {
  children?: ReactNode;
  complex?: boolean;
  legend?: ReactNode;
};

export const Form = ({
  children,
  className,
  complex = false,
  legend,
  ...props
}: FormProps) => {
  return (
    <form className={className} {...props}>
      {complex ? (
        <FieldGroup>{children}</FieldGroup>
      ) : (
        <FieldGroup>
          <FieldSet>
            {legend && <FieldLegend>{legend}</FieldLegend>}
            {children}
          </FieldSet>
        </FieldGroup>
      )}
    </form>
  );
};
