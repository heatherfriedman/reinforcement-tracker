import { combineReducers } from '@reduxjs/toolkit';
import { name as numberName, reducer as numberReducer } from '../slice';

export const rootReducer = combineReducers({
  [numberName]: numberReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
