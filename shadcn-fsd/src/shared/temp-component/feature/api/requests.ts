import { Todos } from '../model';

import { $api } from '@/shared/config';

export const getTodos = async (params: {
  _limit: number;
  _page: number;
  _sort?: string;
  _order?: string;
  query?: {
    id?: number;
  };
}) => {
  return await $api.get<Todos, Todos>(
    'https://jsonplaceholder.typicode.com/todos',
    {
      params: {
        _limit: params._limit,
        _page: params._page,
        _sort: params._sort,
        _order: params._order,
        id: params.query?.id,
      },
    },
  );
};
