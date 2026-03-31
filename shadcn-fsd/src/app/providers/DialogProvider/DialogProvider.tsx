'use client';

import { PropsWithChildren, useState } from 'react';

import { Dialog } from '@shared-ui';
import { DialogContext, DialogPayload } from '@shared-libs/dialog';

export const DialogProvider = ({ children }: PropsWithChildren) => {
  const [modalPayload, setModalPayload] =
    useState<Nullable<DialogPayload>>(null);

  const openModal = (payload: DialogPayload) => {
    setModalPayload({ ...payload, open: true });
  };

  const closeModal = () => {
    setModalPayload(null);
  };

  return (
    <DialogContext.Provider
      value={{
        modalPayload,
        openModal,
        closeModal,
      }}
    >
      {children}
      {modalPayload && <Dialog {...modalPayload} />}
    </DialogContext.Provider>
  );
};
