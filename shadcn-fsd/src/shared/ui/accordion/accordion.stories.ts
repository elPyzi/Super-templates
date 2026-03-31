import { Accordion } from '@shared-ui';

import { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Accordion> = {
  title: 'UI-kit/Accordion',
  component: Accordion,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const DefaultAccordion: Story = {
  args: {
    items: [
      {
        key: 'Pizza',
        title: 'Пицца',
        content: 'Какой то супер пупер текст',
      },
      {
        key: 'pasta',
        title: 'Макорошки',
        content: 'Какой то супер пупер текст',
      },
      {
        key: 'холодец',
        title: 'Холодец',
        content: 'Какой то супер пупер текст',
        disabled: true,
      },
    ],
  },
};

export const CollapsibleAccordion: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Позволяет пользователю закрыть все секции',
      },
    },
  },
  args: {
    collapsible: true,
    items: [
      {
        key: 'Pizza',
        title: 'Пицца',
        content: 'Какой то супер пупер текст',
      },
      {
        key: 'pasta',
        title: 'Макорошки',
        content: 'Какой то супер пупер текст',
      },
      {
        key: 'холодец',
        title: 'Холодец',
        content: 'Какой то супер пупер текст',
        disabled: true,
      },
    ],
  },
};

export const MultipleAccordion: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Позволяет пользователю открыть несколько секций',
      },
    },
  },
  args: {
    type: 'multiple',
    items: [
      {
        key: 'Pizza',
        title: 'Пицца',
        content: 'Какой то супер пупер текст',
      },
      {
        key: 'pasta',
        title: 'Макорошки',
        content: 'Какой то супер пупер текст',
      },
      {
        key: 'холодец',
        title: 'Холодец',
        content: 'Какой то супер пупер текст',
        disabled: true,
      },
    ],
  },
};

export const DisabledAccordion: Story = {
  args: {
    disabled: true,
    items: [
      {
        key: 'Pizza',
        title: 'Пицца',
        content: 'Какой то супер пупер текст',
      },
      {
        key: 'pasta',
        title: 'Макорошки',
        content: 'Какой то супер пупер текст',
      },
      {
        key: 'холодец',
        title: 'Холодец',
        content: 'Какой то супер пупер текст',
        disabled: true,
      },
    ],
  },
};
