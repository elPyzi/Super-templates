import { ReactNode } from 'react';

import {
  PopoverContent,
  PopoverCore,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from './shadcn-popover';

type PopoverClassNames = {
  triggerClassNames: string;
  headerClassNames: string;
  titleClassNames: string;
  descriptionClassNames: string;
  contentClassNames: string;
};

type PopoverProps = {
  trigger: ReactNode;
  content: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  classes?: Partial<PopoverClassNames>;
};

export const Popover = ({
  trigger,
  title,
  description,
  content,
  classes,
}: PopoverProps) => {
  return (
    <PopoverCore>
      <PopoverTrigger asChild className={classes?.triggerClassNames}>
        {trigger}
      </PopoverTrigger>
      <PopoverContent>
        {(title || description) && (
          <PopoverHeader className={classes?.headerClassNames}>
            {title && (
              <PopoverTitle className={classes?.titleClassNames}>
                {title}
              </PopoverTitle>
            )}
            {description && (
              <PopoverDescription className={classes?.descriptionClassNames}>
                {description}
              </PopoverDescription>
            )}
          </PopoverHeader>
        )}
        <div className={classes?.contentClassNames}>{content}</div>
      </PopoverContent>
    </PopoverCore>
  );
};
