export type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

export type Todos = Todo[];

export type TodoFilter = {
  id?: number;
  userId?: number;
  title?: string;
  completed?: boolean;
};
