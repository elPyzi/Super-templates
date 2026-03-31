import { Input } from './input';

import { Meta, StoryObj } from '@storybook/nextjs-vite';

const metaInput: Meta<typeof Input> = {
  title: 'UI-kit/Inputs/Input',
  component: Input,
  tags: ['autodocs'],
};

export default metaInput;

type StoryInput = StoryObj<typeof Input>;

export const Default: StoryInput = {
  args: {
    label: 'Имя',
    placeholder: 'Введите имя',
    description: 'Эта ваша личная информация',
  },
};

export const InputWithColon: StoryInput = {
  args: {
    label: 'Имя',
    placeholder: 'Введите имя',
    description: 'Эта ваша личная информация',
    colon: true,
  },
};

export const ErrorInput: StoryInput = {
  args: {
    label: 'Введите имя',
    error: 'Поля обязательное',
    required: true,
  },
};
