import { useQuery } from '@tanstack/react-query';
import ENV from '../../config/env';
import { apiClient } from './client';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// ─── Query Keys ────────────────────────────────────────────────────────────────
export const todoKeys = {
  all: ['todos'] as const,
  lists: () => [...todoKeys.all, 'list'] as const,
  detail: (id: number) => [...todoKeys.all, 'detail', id] as const,
};

// ─── Fetchers ──────────────────────────────────────────────────────────────────
const fetchTodos = async (): Promise<Todo[]> => {
  const { data } = await apiClient.get<Todo[]>('/todos?_limit=10');
  return data;
};

const fetchTodoById = async (id: number): Promise<Todo> => {
  const { data } = await apiClient.get<Todo>(`/todos/${id}`);
  return data;
};

// ─── Hooks ─────────────────────────────────────────────────────────────────────
export const useGetTodosQuery = () =>
  useQuery<Todo[], Error>({
    queryKey: todoKeys.lists(),
    queryFn: fetchTodos,
    staleTime: ENV.CACHE.TODO_CACHE_TIME * 1000,
  });

export const useGetTodoByIdQuery = (id: number) =>
  useQuery<Todo, Error>({
    queryKey: todoKeys.detail(id),
    queryFn: () => fetchTodoById(id),
    staleTime: ENV.CACHE.TODO_CACHE_TIME * 1000,
    enabled: !!id,
  });