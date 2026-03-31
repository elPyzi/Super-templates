import { RadioGroup } from './Radio';

import { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof RadioGroup> = {
  title: 'UI-kit/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  args: {
    label: 'Любимое аниме',
    description: 'Стоит подумать',
    options: [
      {
        value: 'jojo',
        label: 'JOJO',
      },
      {
        value: 'naruto',
        label: 'naruto',
      },
      {
        value: 'One piece',
        label: 'One piece',
        disabled: true,
      },
    ],
  },
};

export const Horizontal: Story = {
  args: {
    label: 'Любимое аниме',
    description: 'Стоит подумать',
    orientation: 'horizontal',
    options: [
      {
        value: 'jojo',
        label: 'JOJO',
      },
      {
        value: 'naruto',
        label: 'naruto',
      },
      {
        value: 'One piece',
        label: 'One piece',
        disabled: true,
      },
    ],
  },
};

export const Disabled: Story = {
  args: {
    label: 'Любимое аниме',
    description: 'Стоит подумать',
    disabled: true,
    options: [
      {
        value: 'jojo',
        label: 'JOJO',
      },
      {
        value: 'naruto',
        label: 'naruto',
      },
      {
        value: 'One piece',
        label: 'One piece',
        disabled: true,
      },
    ],
  },
};

export const Error: Story = {
  args: {
    label: 'Любимое аниме',
    description: 'Стоит подумать',
    error: 'Поле обязательное',
    required: true,
    options: [
      {
        value: 'jojo',
        label: 'JOJO',
      },
      {
        value: 'naruto',
        label: 'naruto',
      },
      {
        value: 'One piece',
        label: 'One piece',
        disabled: true,
      },
    ],
  },
};
