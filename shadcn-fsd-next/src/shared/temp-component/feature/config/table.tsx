import { Todo } from "../model";

import { ColumnDef } from "@tanstack/react-table";











export const columns: ColumnDef<Todo>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    cell: ({ row }) => <div className="font-medium">{row.getValue('id')}</div>,
    footer: () => <div>Some</div>,
    enableSorting: false,
  },
  {
    accessorKey: 'userId',
    header: 'User ID',
    cell: ({ row }) => <div>User #{row.getValue('userId')}</div>,
  },
  {
    accessorKey: 'title',
    header: 'Task',
    cell: ({ row }) => (
      <div className="max-w-[300px] truncate">{row.getValue('title')}</div>
    ),
  },
  {
    accessorKey: 'completed',
    header: 'Status',
    cell: ({ row }) => {
      const isCompleted = row.getValue('completed') as boolean;
      return (
        <div
          className={`flex items-center ${isCompleted ? 'text-green-600' : 'text-yellow-600'}`}
        >
          {isCompleted ? '✅ Completed' : '⏳ In Progress'}
        </div>
      );
    },
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => (
      <button
        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => console.log('Edit', row.original)}
      >
        Edit
      </button>
    ),
  },
];
