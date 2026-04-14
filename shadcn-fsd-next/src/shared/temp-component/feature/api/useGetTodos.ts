import { Todos } from '../model';
import { useTodosFilter } from '../store';
import { getTodos } from './requests';

import { useQuery } from '@tanstack/react-query';

export const useGetTodos = () => {
  const { filter } = useTodosFilter();

  return useQuery<Todos, Error, Todos>({
    queryKey: [
      'todos',
      filter._page,
      filter._size,
      filter?._sort,
      filter?._direction,
      filter.query?.id,
    ],
    queryFn: () =>
      getTodos({
        _limit: filter._size,
        _page: filter._page,
        _sort: filter?._sort,
        _order: filter?._direction,
        query: {
          id: filter.query?.id,
        },
      }),
    initialData: [],
  });
};
