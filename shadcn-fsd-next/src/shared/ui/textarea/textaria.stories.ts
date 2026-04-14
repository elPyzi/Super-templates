import { Textarea } from './textarea';

import { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Textarea> = {
  title: 'UI-kit/Textarea',
  component: Textarea,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
    description: 'Description',
  },
};

export const Colon: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
    description: 'Description',
    colon: true,
  },
};

export const Error: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
    description: 'Description',
    error: 'Error',
    required: true,
  },
};
