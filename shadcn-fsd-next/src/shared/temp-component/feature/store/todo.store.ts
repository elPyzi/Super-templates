import { SIZE } from '@shared-config';
import { createFilterStore } from '@shared-libs/filter';

import { TodoFilter } from '../model';

export const useTodosFilter = createFilterStore<TodoFilter>({
  meta: {
    _page: 0,
    _size: SIZE.SMALL,
  },
  query: {
    completed: true,
  },
});
