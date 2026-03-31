import { InputOTP } from './input-otp';

import { Meta, StoryObj } from '@storybook/nextjs-vite';

const metaPasswordInput: Meta<typeof InputOTP> = {
  title: 'UI-kit/Inputs/OTP',
  component: InputOTP,
  tags: ['autodocs'],
};

export default metaPasswordInput;

type StoryInput = StoryObj<typeof InputOTP>;

export const Default: StoryInput = {
  args: {
    label: 'Код',
    description: 'Это код с почты',
  },
};

export const InputWithColon: StoryInput = {
  args: {
    label: 'Такой вод код',
    OTPLength: 20,
  },
};

export const ErrorInput: StoryInput = {
  args: {
    label: 'Введите код',
    error: 'Поля обязательное',
    required: true,
  },
};
