import * as React from 'react';

import {
  AccordionContent,
  AccordionCore,
  AccordionItem,
  AccordionTrigger,
} from './shadcn-accordion.client';

type AccordionItem = {
  key: string;
  title: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
};

type AccordionClassNames = {
  accordionClassName: string;
  accordionTitleClassName: string;
  accordionContentClassName: string;
};

type AccordionProps<T extends 'single' | 'multiple'> = {
  type: T;
  items: AccordionItem[];
  collapsible?: boolean;
  disabled?: boolean;
  classes?: AccordionClassNames;
  asChild?: boolean;
  onValueChange?: (value: T extends 'single' ? string : string[]) => void;
  defaultValue?: T extends 'single' ? string : string[];
};

export const Accordion = <T extends 'single' | 'multiple'>({
  type,
  items,
  collapsible = false,
  disabled = false,
  classes,
  defaultValue,
  asChild,
  onValueChange,
}: AccordionProps<T>) => {
  return (
    <AccordionCore
      type={type}
      collapsible={collapsible}
      disabled={disabled}
      className={classes?.accordionClassName}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      defaultValue={defaultValue as any}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onValueChange={onValueChange as any}
    >
      {items.map(({ key, title, content, disabled }) => (
        <AccordionItem key={key} value={key} disabled={disabled}>
          <AccordionTrigger
            asChild={asChild}
            className={classes?.accordionTitleClassName}
          >
            {title}
          </AccordionTrigger>
          <AccordionContent className={classes?.accordionContentClassName}>
            {content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionCore>
  );
};
