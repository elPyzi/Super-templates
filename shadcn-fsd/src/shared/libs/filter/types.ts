import { DIRECTIONS, SIZE } from '@shared-config';

export type BaseFilter<TFilter = unknown> = {
  _page: number;
  _size: SIZE;
  _direction?: DIRECTIONS;
  _sort?: TFilter extends object ? keyof TFilter : string;
};

export type FilterState<TFilter = unknown> = {
  meta: BaseFilter<TFilter>;
  query?: TFilter;
};

export type FiltersActions<TFilter> = {
  setFilter: (filter: Partial<FilterState<TFilter>>) => void;
  resetFilter: () => void;
};

export type FilterStore<TFilter = unknown> = {
  filter: FilterState<TFilter>;
  actions: FiltersActions<TFilter>;
};
