import { DataTable } from '@shared-ui';

import { useGetTodos } from '../api';
import { columns } from '../config/table';
import { Todo, TodoFilter } from '../model';
import { useTodosFilter } from '../store';

export const ViewTodos = () => {
  const TOTAL_ITEMS = 200;
  const { data, isLoading, isFetching } = useGetTodos();
  const { filter, actions } = useTodosFilter();

  return (
    <div>
      <DataTable<Todo, TodoFilter>
        columns={columns}
        data={data}
        isLoading={isLoading || isFetching}
        serverPagination={true}
        filter={filter}
        actions={actions}
        totalItems={TOTAL_ITEMS}
      />
    </div>
  );
};
