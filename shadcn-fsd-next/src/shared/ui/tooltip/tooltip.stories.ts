import { Tooltip } from './Tooltip';

import { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Tooltip> = {
  title: 'UI-kit/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: 'Всплывашка',
    children: 'Какой то текст',
  },
};
