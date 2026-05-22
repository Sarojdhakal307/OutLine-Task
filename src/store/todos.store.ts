import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../types/todo.types';

interface TaskState {
  localTasks: Task[];
}

const initialState: TaskState = {
  localTasks: [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    /**
     * Add a new task to local state
     * Note: This task is stored only locally in Redux
     */
    addTask: (state, action: PayloadAction<Task>) => {
      state.localTasks.unshift(action.payload);
    },

    /**
     * Toggle task completion status
     * Updates only local Redux store
     */
    toggleTask: (state, action: PayloadAction<number>) => {
      const task = state.localTasks.find(
        item => item.id === action.payload,
      );

      if (task) {
        task.completed = !task.completed;
      }
    },

    /**
     * Delete a task from local state
     * Removes the task with the given ID
     */
    deleteTask: (state, action: PayloadAction<number>) => {
      state.localTasks = state.localTasks.filter(
        item => item.id !== action.payload,
      );
    },

    /**
     * Update a task in local state
     * Replaces task with matching ID
     */
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.localTasks.findIndex(
        item => item.id === action.payload.id,
      );
      if (index !== -1) {
        state.localTasks[index] = action.payload;
      }
    },
  },
});

export const {
  addTask,
  toggleTask,
  deleteTask,
  updateTask,
} = taskSlice.actions;

export default taskSlice.reducer;