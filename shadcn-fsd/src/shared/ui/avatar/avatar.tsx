import { ReactNode } from 'react';
import { User } from 'lucide-react';

import { AvatarCore, AvatarFallback, AvatarImage } from './shadcn-avatar';

type AvatarClassNames = {
  avatarClassName: string;
  avatarImageClassName: string;
  avatarFallbackClassName: string;
};

type AvatarProps = {
  src: string;
  alt: string;
  asChild?: boolean;
  loading?: 'eager' | 'lazy';
  classes?: AvatarClassNames;
  delayMs?: number;
  fallback?: ReactNode;
  onClick?: () => void;
};

export const Avatar = ({
  src,
  alt,
  asChild,
  loading,
  classes,
  delayMs,
  fallback,
  onClick,
}: AvatarProps) => {
  return (
    <AvatarCore
      asChild={asChild}
      className={classes?.avatarClassName}
      onClick={onClick}
    >
      <AvatarImage
        src={src}
        alt={alt}
        className={classes?.avatarImageClassName}
        loading={loading}
      />
      <AvatarFallback delayMs={delayMs}>{fallback ?? <User />}</AvatarFallback>
    </AvatarCore>
  );
};
