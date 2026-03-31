// DropdownMenu.stories.tsx
import { LogOut, Settings, UserRoundPen } from 'lucide-react';

import {
  Button,
  DropdownCheckboxGroup,
  DropdownMenu,
  DropdownRadioGroup,
} from '@shared-ui';

import {
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from '@/shared/ui/dropdown-menu/shadcn-dropdown-menu';
import { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof DropdownMenu> = {
  title: 'UI-kit/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

const Trigger = (
  <Button variant="outline" size="sm">
    Open menu
  </Button>
);

export const Default: Story = {
  args: {
    trigger: Trigger,
    content: [
      {
        key: 'group1',
        label: 'settings',
        items: [
          { key: 'profile', labelValue: 'Profile' },
          { key: 'settings', labelValue: 'Settings' },
          { key: 'logout', labelValue: 'Logout', disabled: true },
        ],
      },
    ],
  },
};

export const Icons: Story = {
  args: {
    trigger: Trigger,
    content: [
      {
        key: 'group1',
        label: 'settings',
        items: [
          { key: 'profile', labelValue: 'Profile', icon: <UserRoundPen /> },
          { key: 'settings', labelValue: 'Settings', icon: <Settings /> },
          {
            key: 'logout',
            labelValue: 'Logout',
            disabled: true,
            icon: <LogOut />,
          },
        ],
      },
    ],
  },
};

export const Inner: Story = {
  args: {
    trigger: Trigger,
    content: [
      {
        key: 'group1',
        items: [
          { key: 'profile', labelValue: 'Profile' },
          {
            submenu: {
              trigger: 'Settings',
              content: [
                {
                  key: 'Theme',
                  label: 'Theme',
                },
                {
                  children: (
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>lang</DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem>RU</DropdownMenuItem>
                          <DropdownMenuItem>EN</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>More...</DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                  ),
                },
                {
                  key: 'naruto',
                  label: 'naruto',
                  disabled: true,
                },
              ],
            },
          },
          { key: 'logout', labelValue: 'Logout', disabled: true },
        ],
      },
    ],
  },
};

export const Checkbox: Story = {
  args: {
    trigger: Trigger,
    content: [
      {
        key: 'group1',
        items: [
          { key: 'profile', labelValue: 'Profile' },
          {
            submenu: {
              trigger: 'Settings',
              content: (
                <DropdownCheckboxGroup
                  items={[
                    {
                      label: 'Пицца',
                      key: 'Pizza',
                    },
                    {
                      label: 'Макорошки',
                      key: 'pasta',
                    },
                    {
                      label: 'Холодец',
                      key: 'холодец',
                      disabled: true,
                    },
                  ]}
                />
              ),
            },
          },
          { key: 'logout', labelValue: 'Logout', disabled: true },
        ],
      },
    ],
  },
};

export const Radio: Story = {
  args: {
    trigger: Trigger,
    content: [
      {
        key: 'group1',
        items: [
          { key: 'profile', labelValue: 'Profile' },
          {
            submenu: {
              trigger: 'Settings',
              content: (
                <DropdownRadioGroup
                  options={[
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
                  ]}
                />
              ),
            },
          },
          { key: 'logout', labelValue: 'Logout', disabled: true },
        ],
      },
    ],
  },
};
