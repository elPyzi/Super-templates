import { Button } from './button';

import { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Button> = {
  title: 'UI-kit/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Кнопка',
    variant: 'default',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Кнопка',
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Кнопка ошибка',
      },
    },
  },
  args: {
    children: 'Кнопка',
    variant: 'destructive',
  },
};

export const Outline: Story = {
  args: {
    children: 'Кнопка',
    variant: 'outline',
  },
};

export const Ghost: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Кнопка с прозрачным фоном',
      },
    },
  },
  args: {
    children: 'Кнопка',
    variant: 'ghost',
  },
};

export const Link: Story = {
  args: {
    children: 'Кнопка',
    variant: 'link',
  },
};
