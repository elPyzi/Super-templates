import { CheckboxGroup } from '@shared-ui';

import { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'UI-kit/CheckboxGroup',
  component: CheckboxGroup,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

export const DefaultCheckboxGroup: Story = {
  args: {
    label: 'Выберите любимую еду',
    layout: 'vertical',
    items: [
      {
        label: 'Пицца',
        value: 'Pizza',
      },
      {
        label: 'Макорошки',
        value: 'pasta',
      },
      {
        label: 'Холодец',
        value: 'холодец',
        disabled: true,
      },
    ],
  },
};

export const ErrorCheckboxGroup: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Чек бокс группа с ошибкой',
      },
    },
  },
  args: {
    label: 'Выберите любимую еду',
    layout: 'vertical',
    error: 'Ошибка какая то',
    items: [
      {
        label: 'Пицца',
        value: 'Pizza',
      },
      {
        label: 'Макорошки',
        value: 'pasta',
      },
      {
        label: 'Холодец',
        value: 'холодец',
        disabled: true,
      },
    ],
  },
};
