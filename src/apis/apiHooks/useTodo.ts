/**
 * Custom TanStack Query hooks for Todos
 */

import { useQuery } from '@tanstack/react-query';

import {
  fetchTodos,
  fetchTodoById,
  todoKeys,
  type Todo,
} from '../apiServices/todosApi';
import ENV from '../../config/env';

/**
 * Hook to fetch all todos
 */
export const useTodos = () => {
  const { data = [], isLoading, error, refetch } =
    useQuery<Todo[], Error>({
      queryKey: todoKeys.lists(),
      queryFn: fetchTodos,
      staleTime: ENV.CACHE.TODO_CACHE_TIME * 1000,
    });

  return {
    data,
    isLoading,
    error,
    refetch,
  };
};

/**
 * Hook to fetch single todo detail
 */
export const useTodoDetail = (id: number) => {
  const { data, isLoading, error, refetch } =
    useQuery<Todo, Error>({
      queryKey: todoKeys.detail(id),
      queryFn: () => fetchTodoById(id),
      staleTime: ENV.CACHE.TODO_CACHE_TIME * 1000,
      enabled: !!id,
    });

  return {
    data,
    isLoading,
    error,
    refetch,
  };
};

export type { Todo };