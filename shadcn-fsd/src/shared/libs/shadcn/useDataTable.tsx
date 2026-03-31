import { ChangeEvent } from 'react';

import type { FiltersActions, FilterState } from '@shared-libs/filter';

import { Table } from '@tanstack/react-table';











type TUseDataTable<TData, TFilter> = {
  table: Table<TData>;

  serverPagination?: boolean;
  totalItems?: number;

  filter?: FilterState<TFilter>;
  actions?: FiltersActions<TFilter>;
};

export const useDataTable = <TData, TFilter>({
  table,
  serverPagination,
  totalItems,
  filter,
  actions,
}: TUseDataTable<TData, TFilter>) => {
  const nextPage = () => {
    if (serverPagination && actions && filter) {
      actions.setFilter({ _page: filter._page + 1 });
    } else {
      table.nextPage();
    }
  };

  const prevPage = () => {
    if (serverPagination && actions && filter) {
      actions.setFilter({ _page: filter._page - 1 });
    } else {
      table.previousPage();
    }
  };

  const setPaginationSize = (e: ChangeEvent<HTMLSelectElement>) => {
    const size = Number(e.target.value) as 15 | 30 | 50;

    if (serverPagination && actions) {
      actions.setFilter({
        _size: size,
      });
    } else {
      table.setPageSize(size);
    }
  };

  const setPage = (e: ChangeEvent<HTMLInputElement>) => {
    actions?.setFilter({
      _page: Number(e.target.value),
    });

    return e.target.value;
  };

  const canPrevPage = serverPagination
    ? (filter?._page ?? 0) > 0
    : table.getCanPreviousPage();

  const canNextPage = serverPagination
    ? filter && totalItems !== undefined
      ? (filter._page + 1) * filter._size < totalItems
      : false
    : table.getCanNextPage();

  return {
    nextPage,
    prevPage,
    setPaginationSize,
    setPage,
    canNextPage,
    canPrevPage,
  };
};
