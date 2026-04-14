type ForProps<T> = {
  each: Maybe<T[]>;
  children: (item: T, index: number) => React.ReactNode;
  fallback?: React.ReactNode;
};

export const For = <T,>({ each, children, fallback }: ForProps<T>) => {
  if (!each || each.length === 0) {
    return fallback ?? null;
  }

  return each.map(children);
};
