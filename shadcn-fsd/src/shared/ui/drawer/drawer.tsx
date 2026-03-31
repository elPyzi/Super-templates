import { ReactNode } from 'react';

import {
  DrawerContent,
  DrawerCore,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from './shadcn-drawer';

// https://vaul.emilkowal.ski/api дока о дровере

type DrawerClassNames = {
  drawerClassName: string;
  headerClassName: string;
  titleClassName: string;
  descriptionClassName: string;
  contentClassName: string;
  footerClassName: string;
};

type DrawerProps = {
  open: boolean;
  header: {
    title: string;
    description: string;
  };
  content?: ReactNode;
  direction?: 'top' | 'right' | 'bottom' | 'left';
  // Если false, можно взаимодействовать с остальной страницей.
  modal?: boolean;
  onOpenChange?: (open: boolean) => void;
  footer?: ReactNode;

  // onOpenCallback срабатывает при открытии диалога,onCloseCallback при закрытии
  onOpenCallback?: () => void;
  onCloseCallback?: () => void;

  classes?: DrawerClassNames;
};

export const Drawer = ({
  open,
  header,
  content,
  modal = false,
  direction = 'right',
  onOpenChange,
  footer,
  onOpenCallback,
  onCloseCallback,
  classes,
}: DrawerProps) => {
  return (
    <DrawerCore
      open={open}
      modal={modal}
      direction={direction}
      onOpenChange={onOpenChange}
    >
      <DrawerContent
        onOpenAutoFocus={onOpenCallback}
        onCloseAutoFocus={onCloseCallback}
        className={classes?.drawerClassName}
      >
        <DrawerHeader className={classes?.headerClassName}>
          <DrawerTitle className={classes?.titleClassName}>
            {header.title}
          </DrawerTitle>
          <DrawerDescription className={classes?.descriptionClassName}>
            {header.description}
          </DrawerDescription>
        </DrawerHeader>
        <div className={classes?.contentClassName}>{content}</div>
        {footer && (
          <DrawerFooter className={classes?.footerClassName}>
            {footer}
          </DrawerFooter>
        )}
      </DrawerContent>
    </DrawerCore>
  );
};
