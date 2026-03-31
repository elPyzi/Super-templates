import { ReactNode } from 'react';

import { TabsContent, TabsCore, TabsList, TabsTrigger } from './shadcn-tabs';

type TabsClassNames = {
  wrapperClassName?: string;
  listClassName?: string;
  triggerClassName?: string;
  contentClassName?: string;
};

type TabItem<Key extends string = string> = {
  key: Key;
  title: ReactNode;
  content: ReactNode;
  disabled?: boolean;
};

type TabsProps<Key extends string> = {
  defaultValue?: Key;
  content: Readonly<TabItem<Key>[]>;
  classes?: TabsClassNames;
};

export const Tabs = <Key extends string>({
  defaultValue,
  content,
  classes,
}: TabsProps<Key>) => {
  return (
    <TabsCore defaultValue={defaultValue} className={classes?.wrapperClassName}>
      <TabsList className={classes?.listClassName}>
        {content.map((item) => (
          <TabsTrigger
            disabled={item.disabled}
            value={item.key}
            key={item.key}
            className={classes?.triggerClassName}
          >
            {item.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {content.map((item) => (
        <TabsContent
          value={item.key}
          key={item.key}
          className={classes?.contentClassName}
        >
          {item.content}
        </TabsContent>
      ))}
    </TabsCore>
  );
};
