import * as React from 'react';

export type AccordionItems = {
  key: string;
  title: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}[];

export type RadioOptions = {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
}[];

export type TabItems = {
  key: string;
  title: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}[];

export type CheckboxItems = {
  label: string;
  value: string;
  disabled?: boolean;
}[];

export type SelectOptions = {
  value: string;
  label: string;
  disabled?: boolean;
}[];

export type NativeSelectOptions = {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
}[];

// Все для дроп меню

export type DropdownSubmenuItem = {
  label: React.ReactNode;
  icon?: React.ReactNode;
  shortcut?: string;
  children?: React.ReactNode;
};

export type DropdownSubmenu = {
  trigger: React.ReactNode;
  content: DropdownSubmenuItem[];
};

export type DropdownItem = {
  key: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  shortcut?: string;
  disabled?: boolean;
  submenu?: DropdownSubmenu;
};

export type DropdownGroup = {
  key: string;
  label?: React.ReactNode;
  items: DropdownItem[];
};

export type DropdownRadioItem = {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
};

export type DropdownCheckboxItem = {
  key: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
};
