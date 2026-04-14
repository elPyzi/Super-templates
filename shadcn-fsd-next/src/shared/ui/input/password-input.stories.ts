import { PasswordInput } from './input';

import { Meta, StoryObj } from '@storybook/nextjs-vite';

const metaPasswordInput: Meta<typeof PasswordInput> = {
  title: 'UI-kit/Inputs/Password',
  component: PasswordInput,
  tags: ['autodocs'],
};

export default metaPasswordInput;

type StoryInput = StoryObj<typeof PasswordInput>;

export const Default: StoryInput = {
  args: {
    label: 'Пароль',
    placeholder: 'Введите пароль',
    description: 'Эта ваша личная информация',
    value: '123456789',
  },
};

export const InputWithColon: StoryInput = {
  args: {
    label: 'Пароль',
    placeholder: 'Введите пароль',
    description: 'Эта ваша личная информация',
    colon: true,
  },
};

export const ErrorInput: StoryInput = {
  args: {
    label: 'Введите пароль',
    error: 'Поля обязательное',
    required: true,
  },
};
