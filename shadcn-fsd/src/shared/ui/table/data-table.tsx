'use client';

import { ChevronDown, ChevronsUpDown, ChevronUp, Package } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Button, Input, NativeSelect, Spinner } from '@shared-ui';
import type { FiltersActions, FilterState } from '@shared-libs/filter';
import { cn, useDataTable } from '@shared-libs/shadcn';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './shadcn-table';

import { NativeSelectOptions } from '@shared-model';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';

const PAGE_OPTIONS: NativeSelectOptions = [
  { value: '15', label: 15 },
  { value: '30', label: 30 },
  { value: '50', label: 50 },
];

interface DataTableProps<TData = unknown, TFilter = unknown> {
  // common
  columns: ColumnDef<TData>[];
  data: TData[];
  isLoading?: boolean;
  resizeMode?: boolean;

  // pagination
  serverPagination?: boolean;
  totalItems?: number;

  //filter
  filter?: FilterState<TFilter>;
  actions?: FiltersActions<TFilter>;

  //ui
  pagination?: boolean;
  searchPage?: boolean;
  sorting?: boolean;
}

export const DataTable = <TData, TFilter>({
  columns,
  data,
  resizeMode = true,
  pagination = true,
  isLoading = false,
  serverPagination = false,
  filter,
  actions,
  totalItems,
  searchPage = false,
  sorting = false,
}: DataTableProps<TData, TFilter>) => {
  const t = useTranslations('uiKit');

  const tableData = serverPagination && isLoading ? [] : data;

  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    enableColumnResizing: resizeMode,
    columnResizeMode: 'onChange',
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: serverPagination,
    rowCount: serverPagination ? totalItems : undefined,

    state:
      serverPagination && filter
        ? {
            pagination: {
              pageIndex: filter._page,
              pageSize: filter._size,
            },
            sorting: filter._sort
              ? [
                  {
                    id: filter._sort,
                    desc: filter._direction === 'desc',
                  },
                ]
              : [],
          }
        : undefined,

    onPaginationChange: (updater) => {
      if (serverPagination && actions && filter) {
        const next =
          typeof updater === 'function'
            ? updater({ pageIndex: filter._page, pageSize: filter._size })
            : updater;

        actions.setFilter({
          _page: next.pageIndex,
          _size: next.pageSize as 15 | 30 | 50,
        });
      } else {
        table.setPagination(updater);
      }
    },

    onSortingChange: (updater) => {
      if (!actions || !filter) return;

      const next =
        typeof updater === 'function'
          ? updater(table.getState().sorting)
          : updater;

      const sort = next[0];

      actions.setFilter({
        _page: 0,
        _sort: sort?.id,
        _direction: sort ? (sort.desc ? 'desc' : 'asc') : undefined,
      });
    },
  });

  const {
    nextPage,
    prevPage,
    setPaginationSize,
    setPage,
    canNextPage,
    canPrevPage,
  } = useDataTable<TData, TFilter>({
    table,
    filter,
    actions,
    serverPagination,
    totalItems,
  });

  const renderTableBody = () => {
    if (isLoading) {
      return (
        <TableRow>
          <TableCell colSpan={columns.length}>
            <div className="flex items-center justify-center h-24 w-full">
              <Spinner size={48} />
            </div>
          </TableCell>
        </TableRow>
      );
    }

    const rows = table.getRowModel().rows;
    if (!rows.length) {
      return (
        <TableRow>
          <TableCell colSpan={columns.length}>
            <div className="flex flex-col items-center justify-center gap-3 h-24 w-full">
              <Package size={48} />
              <span className="text-2xl">{t('emptyData')}</span>
            </div>
          </TableCell>
        </TableRow>
      );
    }

    return rows.map((row) => (
      <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
        {row.getVisibleCells().map((cell) => (
          <TableCell key={cell.id} style={{ width: cell.column.getSize() }}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TableCell>
        ))}
      </TableRow>
    ));
  };

  return (
    <div>
      <div className="overflow-y-auto min-h-160 rounded-md border mb-2">
        <Table className="table-fixed">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const canSort = header.column.getCanSort();
                  const sortState = header.column.getIsSorted();

                  return (
                    <TableHead
                      key={header.id}
                      style={{ width: header.getSize() }}
                      className={cn(
                        'relative select-none',
                        canSort && sorting && 'cursor-pointer',
                      )}
                      onClick={
                        canSort && sorting
                          ? header.column.getToggleSortingHandler()
                          : undefined
                      }
                    >
                      <div className="flex items-center justify-between">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}

                        {canSort && (
                          <>
                            {sortState === 'asc' && <ChevronUp />}
                            {sortState === 'desc' && <ChevronDown />}
                            {!sortState && <ChevronsUpDown />}
                          </>
                        )}
                      </div>
                      {resizeMode && header.column.getCanResize() && (
                        <div
                          onMouseDown={header.getResizeHandler()}
                          onTouchStart={header.getResizeHandler()}
                          onClick={(e) => e.stopPropagation()}
                          className="absolute right-0 top-0 h-full w-1 cursor-col-resize select-none bg-transparent hover:bg-blue-500/40"
                        />
                      )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>{renderTableBody()}</TableBody>
        </Table>
      </div>

      {pagination && (
        <div className="flex gap-3 justify-end items-center ">
          <Button
            variant="outline"
            size="sm"
            onClick={prevPage}
            disabled={!canPrevPage}
          >
            {t('buttons.prev')}
          </Button>
          <div
            className={cn('text-center', {
              'min-w-15': table.getState().pagination.pageSize + 1 > 99,
              'min-w-8': table.getState().pagination.pageSize + 1 <= 99,
            })}
          >
            / {table.getState().pagination.pageIndex + 1} /
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={nextPage}
            disabled={!canNextPage}
          >
            {t('buttons.next')}
          </Button>
          {serverPagination && searchPage && (
            <Input
              classes={{
                inputWrapperClassName: 'w-3',
              }}
              onChange={setPage}
            />
          )}
          <NativeSelect
            options={PAGE_OPTIONS}
            value={String(filter?._size) ?? PAGE_OPTIONS[0].value}
            onChange={setPaginationSize}
            classes={{
              wrapperClassName: 'w-20',
            }}
          />
        </div>
      )}
    </div>
  );
};
