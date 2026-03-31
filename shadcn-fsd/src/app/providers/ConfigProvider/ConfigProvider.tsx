import { PropsWithChildren } from 'react';

import { DialogProvider, QueryProvider, ThemeProvider } from '@app/providers';
import { Toaster } from '@shared-ui';

export const ConfigProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <QueryProvider>
        <DialogProvider>
          {children}
          <Toaster />
        </DialogProvider>
      </QueryProvider>
    </ThemeProvider>
  );
};
