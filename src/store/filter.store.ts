import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type FilterType = 'all' | 'completed' | 'pending';

interface FilterState {
  activeFilter: FilterType;
}

const initialState: FilterState = {
  activeFilter: 'all',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<FilterType>) => {
      state.activeFilter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
