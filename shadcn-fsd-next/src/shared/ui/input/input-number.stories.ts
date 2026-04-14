import { NumberInput } from './input';

import { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof NumberInput> = {
  title: 'UI-kit/Inputs/NumberInput',
  component: NumberInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NumberInput>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Базовый NumberInput без ограничений.',
      },
    },
  },
};

export const MinInput: Story = {
  args: {
    min: 5,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Минимальное допустимое значение — 5. Значения меньше блокируются.',
      },
    },
  },
};

export const MaxInput: Story = {
  args: {
    max: 5,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Максимальное допустимое значение — 5. Значения больше блокируются.',
      },
    },
  },
};

export const Positive: Story = {
  args: {
    positive: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Разрешены только положительные числа.',
      },
    },
  },
};

export const Negative: Story = {
  args: {
    negative: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Разрешены только отрицательные числа.',
      },
    },
  },
};
