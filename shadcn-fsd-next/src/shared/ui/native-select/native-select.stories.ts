import { NativeSelect } from './native-select';

import { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof NativeSelect> = {
  title: 'UI-kit/NativeSelect',
  component: NativeSelect,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NativeSelect>;

export const Default: Story = {
  args: {
    label: 'Выберите продукт',
    options: [
      {
        value: 'apple',
        label: 'Яблоко',
      },
      {
        value: 'banana',
        label: 'Банан',
      },
      {
        value: 'watermelon',
        label: 'Арбуз',
        disabled: true,
      },
    ],
  },
};

export const Disabled: Story = {
  args: {
    label: 'Выберите продукт',
    disabled: true,
    options: [
      {
        value: 'apple',
        label: 'Яблоко',
      },
      {
        value: 'banana',
        label: 'Банан',
      },
      {
        value: 'watermelon',
        label: 'Арбуз',
        disabled: true,
      },
    ],
  },
};

export const SelectError: Story = {
  args: {
    label: 'Выберите продукт',
    error: 'Выберите поле',
    options: [
      {
        value: 'apple',
        label: 'Яблоко',
      },
      {
        value: 'banana',
        label: 'Банан',
      },
      {
        value: 'watermelon',
        label: 'Арбуз',
        disabled: true,
      },
    ],
  },
};
