'use client';

import { DataPicker, RangePicker } from '@/shared/ui';

export const HomePage = () => {
  return (
    <div>
      <RangePicker />
      <RangePicker
        initialValueFrom={new Date(2024, 0, 10)}
        initialValueTo={new Date(2024, 0, 1)}
      />
      <DataPicker />
    </div>
  );
};
