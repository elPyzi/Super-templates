import { useState } from 'react';
import { toast } from 'sonner';

import { Button, Toaster } from '@shared-ui';

import { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Toaster> = {
  title: 'UI-kit/Toaster',
  component: Toaster,
  tags: ['autodocs'],
};

const positions = [
  'top-left',
  'top-center',
  'top-right',
  'bottom-left',
  'bottom-center',
  'bottom-right',
] as const;

export default meta;
type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: () => {
    const [position, setPosition] =
      useState<(typeof positions)[number]>('top-right');

    return (
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <label htmlFor="position">Position:</label>
          <select
            id="position"
            value={position}
            onChange={(e) =>
              setPosition(e.target.value as (typeof positions)[number])
            }
          >
            {positions.map((pos) => (
              <option key={pos} value={pos}>
                {pos}
              </option>
            ))}
          </select>
        </div>

        <Button onClick={() => toast.success('This is a success toast!')}>
          Success
        </Button>
        <Button onClick={() => toast.info('This is an info toast!')}>
          Info
        </Button>
        <Button onClick={() => toast.warning('This is a warning toast!')}>
          Warning
        </Button>
        <Button onClick={() => toast.error('This is an error toast!')}>
          Error
        </Button>
        <Button onClick={() => toast.loading('Loading...')}>Loading</Button>
        <Button onClick={() => toast.dismiss()}>close all</Button>
        <Button
          onClick={() =>
            toast.loading('idddddd', {
              id: 'id',
            })
          }
        >
          id load
        </Button>
        <Button onClick={() => toast.dismiss('id')}>close by id</Button>

        <Toaster position={position} />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Пример использования Toaster с глобальным методом `toast` из sonner. Кнопки вызывают разные типы уведомлений.',
      },
    },
  },
};
