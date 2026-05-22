import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../store/todos.store';
import filterReducer from '../store/filter.store';
import themeReducer from '../store/theme.store';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filter: filterReducer,
    theme: themeReducer,
    // todosApi removed — TanStack Query manages its own cache independently
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
