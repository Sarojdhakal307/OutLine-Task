import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import ENV from '../../config/env';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: ENV.API.BASE_URL,
  }),
  tagTypes: ['Todos', 'TodoDetail'],
  endpoints: (builder) => ({
    /**
     * Fetch all todos from API
     * Provides 'Todos' tag for cache invalidation
     */
    getTodos: builder.query<Todo[], void>({
      query: () => '/todos',
      providesTags: ['Todos'],
      keepUnusedDataFor: ENV.CACHE.TODO_CACHE_TIME,
    }),

    /**
     * Fetch a single todo by ID from API
     * Provides specific 'TodoDetail' tag for that ID
     */
    getTodoById: builder.query<Todo, number>({
      query: (id) => `/todos/${id}`,
      providesTags: (result, error, id) => [{ type: 'TodoDetail', id }],
      keepUnusedDataFor: ENV.CACHE.TODO_CACHE_TIME,
    }),
  }),
});

export const {
  useGetTodosQuery,
  useGetTodoByIdQuery,
} = todosApi;