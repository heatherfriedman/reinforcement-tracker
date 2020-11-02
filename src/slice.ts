import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialNumState {
  number: Number[];
}
const initialState: InitialNumState = {
  number: [],
};

const slice = createSlice({
  name: 'allNums',
  initialState,
  reducers: {
    setNumber(state, action: PayloadAction<{ number: Number }>) {
      const { number } = action.payload;
      state.number.push(number);
    },
  },
});

export const { actions, reducer, name } = slice;
