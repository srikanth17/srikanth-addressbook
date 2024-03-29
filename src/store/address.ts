import { createSlice } from '@reduxjs/toolkit';
import { Address } from '../types/types';

const addressesSlice = createSlice({
  name: 'addresses',
  initialState: [] as Address[],
  reducers: {
    addAddress: (state, action) => {
      console.log(action.payload);
      return [...state, action.payload];
    },
  },
});

const { actions, reducer } = addressesSlice;
export const { addAddress } = actions;
export default reducer;
