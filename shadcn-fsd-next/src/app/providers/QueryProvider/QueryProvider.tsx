'use client';

import { PropsWithChildren } from 'react';

import { queryClient } from '@shared-config';
import { QueryClientProvider } from '@tanstack/react-query';

export const QueryProvider = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
