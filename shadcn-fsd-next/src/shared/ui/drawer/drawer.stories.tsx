import { useState } from 'react';

import { Button } from '@shared-ui';

import { Drawer } from './drawer';

import { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Drawer> = {
  title: 'UI-kit/Drawer',
  component: Drawer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer
          open={open}
          onOpenChange={setOpen}
          header={{
            title: 'Default Drawer',
            description: 'This is a right drawer.',
          }}
          content={
            <div className="p-4">Hello! This is the drawer content.</div>
          }
          footer={
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setOpen(false)}>
                Close
              </Button>
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
          'Простой Drawer, открывающийся справа с заголовком, описанием, контентом и футером.',
      },
    },
  },
};

export const Top: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Top Drawer</Button>
        <Drawer
          open={open}
          onOpenChange={setOpen}
          direction="top"
          header={{ title: 'Top Drawer', description: 'Drawer from top.' }}
          content={<div className="p-4">Content at the top!</div>}
        />
      </>
    );
  },
  parameters: {
    docs: {
      description: { story: 'Drawer, открывающийся сверху.' },
    },
  },
};

export const Bottom: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Bottom Drawer</Button>
        <Drawer
          open={open}
          onOpenChange={setOpen}
          direction="bottom"
          header={{
            title: 'Bottom Drawer',
            description: 'Drawer from bottom.',
          }}
          content={<div className="p-4">Content at the bottom!</div>}
        />
      </>
    );
  },
  parameters: {
    docs: {
      description: { story: 'Drawer, открывающийся снизу.' },
    },
  },
};

export const Left: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Left Drawer</Button>
        <Drawer
          open={open}
          onOpenChange={setOpen}
          direction="left"
          header={{ title: 'Left Drawer', description: 'Drawer from left.' }}
          content={<div className="p-4">Content from the left!</div>}
        />
      </>
    );
  },
  parameters: {
    docs: {
      description: { story: 'Drawer, открывающийся слева.' },
    },
  },
};
