import { createContext, ReactNode } from 'react';

export type DialogPayload = {
  open: boolean;
  title: string;
  content: ReactNode;
  footer: ReactNode;
  onOpenChange?: (open: boolean) => void;
  description?: string;
  onOpenCallback?: () => void;
  onCloseCallback?: () => void;
};

type ModalContextValue = {
  modalPayload: Nullable<DialogPayload>;
  openModal: (payload: DialogPayload) => void;
  closeModal: () => void;
};

export const DialogContext = createContext<Nullable<ModalContextValue>>(null);
