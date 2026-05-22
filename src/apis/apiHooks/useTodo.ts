// src/hooks/useTodos.ts
/**
 * Custom hooks for fetching todo data from API
 * Note: Create/Update/Delete operations are handled locally in Redux
 * as this is a dummy API that doesn't persist data
 */
import {
  useGetTodosQuery,
  useGetTodoByIdQuery,
  type Todo,
} from '../apiServices/todosApi';

/**
 * Hook to fetch all todos from API
 * @returns Query result with data, isLoading, error, and refetch
 */
export const useTodos = () => {
  const { data = [], isLoading, error, refetch } = useGetTodosQuery();
  return { data, isLoading, error, refetch };
};

/**
 * Hook to fetch a single todo by ID from API
 * @param id - Todo ID
 * @returns Query result with todo data, isLoading, error, and refetch
 */
export const useTodoDetail = (id: number) => {
  const { data, isLoading, error, refetch } = useGetTodoByIdQuery(id, {
    skip: !id,
  });
  return { data, isLoading, error, refetch };
};

export type { Todo };