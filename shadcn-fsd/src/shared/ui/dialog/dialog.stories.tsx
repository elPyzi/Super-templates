import { useState } from 'react';

import { Button } from '@shared-ui';

import { Dialog } from './dialog';

import { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Dialog> = {
  title: 'UI-kit/Dialog',
  component: Dialog,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        <Dialog
          open={open}
          onOpenChange={setOpen}
          title="Default Dialog"
          description="This is a simple dialog example."
          content={<div className="p-4">Hello! Here is some content.</div>}
          footer={
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setOpen(false)}>
                Close
              </Button>
              <Button onClick={() => alert('Action!')}>Action</Button>
            </div>
          }
        />
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Простой Dialog с заголовком, описанием, контентом и футером с кнопками.',
      },
    },
  },
};

export const WithoutDescription: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        <Dialog
          open={open}
          onOpenChange={setOpen}
          title="Dialog Without Description"
          content={<div className="p-4">Content only, no description.</div>}
          footer={
            <Button variant="outline" onClick={() => setOpen(false)}>
              Close
            </Button>
          }
        />
      </>
    );
  },
  parameters: {
    docs: {
      description: { story: 'Dialog без описания (description).' },
    },
  },
};

export const WithCallbacks: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        <Dialog
          open={open}
          onOpenChange={setOpen}
          title="Dialog with Callbacks"
          description="This dialog has open/close callbacks."
          content={<div className="p-4">Content with callbacks.</div>}
          onOpenCallback={() => console.log('Dialog opened')}
          onCloseCallback={() => console.log('Dialog closed')}
          footer={
            <Button variant="outline" onClick={() => setOpen(false)}>
              Close
            </Button>
          }
        />
      </>
    );
  },
  parameters: {
    docs: {
      description: { story: 'Dialog с коллбэками при открытии и закрытии.' },
    },
  },
};
