import { Tabs } from './Tabs';

import { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Tabs> = {
  title: 'UI-kit/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    content: [
      {
        key: 'jojo',
        title: 'JOJO',
        content: 'Jojo content',
      },
      {
        key: 'naruto',
        title: 'naruto',
        content: 'Naruto content',
      },
      {
        key: 'One piece',
        title: 'One piece',
        content: 'One piece content',
        disabled: true,
      },
    ],
  },
};
