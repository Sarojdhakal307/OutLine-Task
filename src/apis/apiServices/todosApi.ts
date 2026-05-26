import { apiClient } from './client';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// ─── Query Keys ───────────────────────────────────────────────────────────────

export const todoKeys = {
  all: ['todos'] as const,
  lists: () => [...todoKeys.all, 'list'] as const,
  detail: (id: number) => [...todoKeys.all, 'detail', id] as const,
};

// ─── API Fetch Services ──────────────────────────────────────────────────────

export const fetchTodos = async (): Promise<Todo[]> => {
  const { data } = await apiClient.get<Todo[]>('/todos?_limit=10');
  return data;
};

export const fetchTodoById = async (id: number): Promise<Todo> => {
  const { data } = await apiClient.get<Todo>(`/todos/${id}`);
  return data;
};
