import { useState } from 'react';

import { Button } from '../button';
import { Popover } from './popover';

import { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Popover> = {
  title: 'UI-kit/Popover',
  component: Popover,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Popover>;
export default meta;

const Trigger = <Button variant="outline">Open Popover</Button>;

export const Default: Story = {
  args: {
    trigger: Trigger,
    content: <p className="max-w-xs">Simple popover text</p>,
  },
};

export const LongText: Story = {
  args: {
    trigger: Trigger,
    content: (
      <p className="max-w-xs break-words">
        Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong
        text
      </p>
    ),
    classes: {
      contentClassNames: 'p-4 w-auto',
    },
  },
};

export const List: Story = {
  args: {
    trigger: Trigger,
    content: (
      <ul className="flex flex-col gap-2">
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
      </ul>
    ),
  },
};

export const ScrollableList: Story = {
  args: {
    trigger: Trigger,
    content: (
      <ul className="flex max-h-40 flex-col gap-2 overflow-y-auto">
        {Array.from({ length: 20 }).map((_, i) => (
          <li key={i}>Item {i + 1}</li>
        ))}
      </ul>
    ),
  },
};

export const WideContent: Story = {
  args: {
    trigger: Trigger,
    content: (
      <div className="flex gap-4">
        <div className="w-40 h-20 bg-red-200" />
        <div className="w-40 h-20 bg-blue-200" />
        <div className="w-40 h-20 bg-green-200" />
      </div>
    ),
  },
};

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Popover
        trigger={
          <Button onClick={() => setOpen((prev) => !prev)}>Toggle</Button>
        }
        content={<p>Controlled popover</p>}
      />
    );
  },
};
