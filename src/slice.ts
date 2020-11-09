import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  rewardCount: Number;
  rewardType: string;
}
const initialState: InitialState = {
  rewardCount: 0,
  rewardType: '',
};

const slice = createSlice({
  name: 'rewards',
  initialState,
  reducers: {
    setNumber(state, action: PayloadAction<{ count: Number }>) {
      const { count } = action.payload;
      state.rewardCount = count;
    },
  },
});

export const { actions, reducer, name } = slice;
