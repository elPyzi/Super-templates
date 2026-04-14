import { Avatar } from '@shared-ui';

import { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Avatar> = {
  title: 'UI-kit/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export default meta;
const URL_TO_IMG =
  'https://www.animationmagazine.net/wordpress/wp-content/uploads/3_jojoday_kv.jpg';

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: URL_TO_IMG,
    alt: 'jojo',
  },
};

export const Fallback: Story = {
  args: {
    src: 'блаблабла',
    alt: 'блабла',
  },
};

export const CustomFallback: Story = {
  args: {
    src: 'блаблабла',
    alt: 'блабла',
    fallback: 'фолбек',
  },
};
