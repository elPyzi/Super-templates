import { SIZE } from '@shared-config';
import { devtools } from 'zustand/middleware';
import { create } from 'zustand/react';

import { FilterState, FilterStore } from './types';

const DEFAULT_FILTER = <TFilter = unknown>(): FilterState<TFilter> => ({
  meta: {
    _page: 0,
    _size: SIZE.SMALL,
  },
});

export const createFilterStore = <TFilter = unknown>(
  initialFilter?: FilterState<TFilter>,
) =>
  create<FilterStore<TFilter>>()(
    devtools((set) => ({
      filter: {
        ...DEFAULT_FILTER<TFilter>(),
        ...initialFilter,
      },

      actions: {
        setFilter: (filter) =>
          set((state) => ({
            filter: { ...state.filter, ...filter },
          })),

        resetFilter: () =>
          set(() => ({
            filter: {
              ...DEFAULT_FILTER<TFilter>(),
              ...initialFilter,
              meta: {
                ...DEFAULT_FILTER<TFilter>().meta,
                ...initialFilter?.meta,
              },
            },
          })),
      },
    })),
  );
