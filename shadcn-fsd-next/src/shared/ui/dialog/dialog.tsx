import { ReactNode } from 'react';

import { DialogContent, DialogCore, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './shadcn-dialog';

type DialogClassNames = {
  dialogClassname: string;
  headerClassname: string;
  titleClassname: string;
  descriptionClassname: string;
  contentClassname: string;
  footerClassname: string;
};

type DialogProps = {
  open: boolean;
  title: string;
  content: ReactNode;
  footer: ReactNode;
  onOpenChange?: (open: boolean) => void;
  description?: string;
  classes?: DialogClassNames;

  // onOpenCallback срабатывает при открытии диалога,onCloseCallback при закрытии
  onOpenCallback?: () => void;
  onCloseCallback?: () => void;
};

export const Dialog = ({
  open,
  title,
  onOpenChange,
  content,
  footer,
  description,
  classes,
  onOpenCallback,
  onCloseCallback,
}: DialogProps) => {
  return (
    <DialogCore open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={classes?.dialogClassname}
        onOpenAutoFocus={onOpenCallback}
        onCloseAutoFocus={onCloseCallback}
      >
        <DialogHeader className={classes?.headerClassname}>
          <DialogTitle className={classes?.titleClassname}>{title}</DialogTitle>
          {description && (
            <DialogDescription className={classes?.descriptionClassname}>
              {description}
            </DialogDescription>
          )}
        </DialogHeader>
        <div className={classes?.contentClassname}>{content}</div>
        {footer && (
          <DialogFooter className={classes?.footerClassname}>
            {footer}
          </DialogFooter>
        )}
      </DialogContent>
    </DialogCore>
  );
};
