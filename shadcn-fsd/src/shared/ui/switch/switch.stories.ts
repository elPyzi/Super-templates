import { Switch } from './switch';

import { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Switch> = {
  title: 'UI-kit/Switch',
  component: Switch,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: 'Клик',
  },
};

export const Reverse: Story = {
  args: {
    label: 'Клик',
    reverse: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Клик',
    disabled: true,
  },
};
