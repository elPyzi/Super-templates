import * as React from 'react';

import { TooltipContent, TooltipCore, TooltipTrigger } from './shadcn-tooltip';

type TooltipProps = {
  children: React.ReactNode;
  content: React.ReactNode;
};

export const Tooltip = ({ children, content }: TooltipProps) => {
  return (
    <TooltipCore>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipContent>{content}</TooltipContent>
    </TooltipCore>
  );
};
