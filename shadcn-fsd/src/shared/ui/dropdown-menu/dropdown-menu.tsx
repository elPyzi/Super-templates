'use client';

import * as React from 'react';
import { ComponentProps, Fragment, ReactNode, useState } from 'react';

import {
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuCore,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from './shadcn-dropdown-menu';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

type DropdownMenuSubmenuItem = {
  key?: string;
  label?: ReactNode;
  icon?: ReactNode;
  shortcut?: string;
  children?: ReactNode;
  disabled?: boolean;
};

type DropdownMenuSubmenu = {
  trigger: ReactNode;
  content: DropdownMenuSubmenuItem[] | ReactNode;
};

type DropdownMenuItem = {
  key?: string;
  labelValue?: ReactNode;
  disabled?: boolean;
  submenu?: DropdownMenuSubmenu;
  shortcut?: string;
  icon?: ReactNode;
};

type DropdownMenuGroup = {
  key: string;
  items: DropdownMenuItem[];
  label?: ReactNode;
};

type DropdownMenuProps = {
  trigger: ReactNode;
  content: DropdownMenuGroup[];
};

export const DropdownMenu = ({ trigger, content }: DropdownMenuProps) => {
  return (
    <DropdownMenuCore>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent>
        {content.map((group, index) => (
          <DropdownMenuGroup key={group.key}>
            {group.label ? (
              <DropdownMenuLabel>{group.label}</DropdownMenuLabel>
            ) : (
              index !== 0 && <DropdownMenuSeparator />
            )}
            {group.items.map((item) => (
              <Fragment key={item.key}>
                {item.labelValue && (
                  <DropdownMenuItem
                    className="flex items-center"
                    disabled={item.disabled}
                  >
                    {item.icon}
                    {item.labelValue}
                    {item.shortcut && (
                      <DropdownMenuShortcut>
                        {item.shortcut}
                      </DropdownMenuShortcut>
                    )}
                  </DropdownMenuItem>
                )}

                {item.submenu && (
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      {item.submenu.trigger}
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        {Array.isArray(item.submenu.content)
                          ? item.submenu.content.map((subitem) => (
                              <Fragment key={subitem.key}>
                                {subitem.label && (
                                  <DropdownMenuItem disabled={subitem.disabled}>
                                    {subitem.icon}
                                    {subitem.label}
                                    {subitem.shortcut && (
                                      <DropdownMenuShortcut>
                                        {subitem.shortcut}
                                      </DropdownMenuShortcut>
                                    )}
                                  </DropdownMenuItem>
                                )}
                                {subitem.children && subitem.children}
                              </Fragment>
                            ))
                          : item.submenu.content}
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                )}
              </Fragment>
            ))}
          </DropdownMenuGroup>
        ))}
      </DropdownMenuContent>
    </DropdownMenuCore>
  );
};

type RadioOption = {
  value: string;
  label: ReactNode;
  disabled?: boolean;
};

type DropdownRadioGroupProps = ComponentProps<
  typeof DropdownMenuPrimitive.RadioGroup
> & {
  options: RadioOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
};

export const DropdownRadioGroup = ({
  options,
  onValueChange,
  value,
  defaultValue,
}: DropdownRadioGroupProps) => {
  return (
    <DropdownMenuRadioGroup
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
    >
      {options.map((option) => (
        <DropdownMenuRadioItem
          key={option.value}
          value={option.value}
          disabled={option.disabled}
          onSelect={(e) => e.preventDefault()}
        >
          {option.label}
        </DropdownMenuRadioItem>
      ))}
    </DropdownMenuRadioGroup>
  );
};

type DropdownCheckboxGroupItem = {
  key: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
};

type DropdownCheckboxGroupProps = {
  items: DropdownCheckboxGroupItem[];
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
};

export const DropdownCheckboxGroup = ({
  items,
  value,
  onValueChange,
  defaultValue = [],
}: DropdownCheckboxGroupProps) => {
  const isControlled = value !== undefined;

  const [internalValue, setInternalValue] = useState<string[]>(defaultValue);

  const selectedValues = isControlled ? value : internalValue;

  const updateValue = (value: string[]) => {
    if (!isControlled) {
      setInternalValue(value);
    }

    onValueChange?.(value);
  };

  const toggleValue = (value: string, checked: boolean) => {
    if (checked) {
      updateValue([...selectedValues, value]);
    } else {
      updateValue(selectedValues.filter((v) => v !== value));
    }
  };

  return (
    <>
      {items.map((item) => {
        return (
          <DropdownMenuCheckboxItem
            key={item.key}
            checked={selectedValues.includes(item.key)}
            disabled={item.disabled}
            onCheckedChange={(checked) => toggleValue(item.key, checked)}
            onSelect={(e) => e.preventDefault()}
          >
            {item.icon}
            {item.label}
          </DropdownMenuCheckboxItem>
        );
      })}
    </>
  );
};
