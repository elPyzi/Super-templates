import { Select } from './select';

import { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Select> = {
  title: 'UI-kit/Select',
  component: Select,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'disabled', label: 'Disabled option', disabled: true },
];

export const Default: Story = {
  args: {
    options,
    placeholder: 'Select value',
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовый Select без label и error.',
      },
    },
  },
};

export const WithLabel: Story = {
  args: {
    options,
    label: 'Fruit',
    placeholder: 'Choose fruit',
  },
  parameters: {
    docs: {
      description: {
        story: 'Select с label.',
      },
    },
  },
};

export const WithGroupLabel: Story = {
  args: {
    options,
    label: 'Fruit',
    groupLabel: 'Available fruits',
    placeholder: 'Choose fruit',
  },
  parameters: {
    docs: {
      description: {
        story: 'Select с groupLabel внутри выпадающего списка.',
      },
    },
  },
};

export const WithDefaultValue: Story = {
  args: {
    options,
    label: 'Fruit',
    defaultValue: 'banana',
  },
  parameters: {
    docs: {
      description: {
        story: 'Select с предустановленным значением (defaultValue).',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    options,
    label: 'Fruit',
    disabled: true,
    placeholder: 'Disabled select',
  },
  parameters: {
    docs: {
      description: {
        story: 'Отключённый Select.',
      },
    },
  },
};

export const WithError: Story = {
  args: {
    options,
    label: 'Fruit',
    placeholder: 'Choose fruit',
    error: 'Field is required',
  },
  parameters: {
    docs: {
      description: {
        story: 'Select с отображением ошибки.',
      },
    },
  },
};
