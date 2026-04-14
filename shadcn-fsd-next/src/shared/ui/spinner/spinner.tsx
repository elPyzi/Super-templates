import { Loader2Icon } from 'lucide-react';

import { cn } from '@shared-libs/shadcn/utils';

type SpinnerProps = React.ComponentProps<'svg'> & {
  size?: number | string;
};

function Spinner({ className, size, ...props }: SpinnerProps) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn('size-4 animate-spin', className)}
      size={size}
      {...props}
    />
  );
}

export { Spinner };
