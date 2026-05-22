import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './todos.store';
import filterReducer from './filter.store';
import themeReducer from './theme.store';
import { todosApi } from '../apis/apiServices/todosApi';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filter: filterReducer,
    theme: themeReducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(todosApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
