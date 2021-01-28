import { configureStore } from '@reduxjs/toolkit';
import addressesReducer from './address';

const store = configureStore({
  reducer: {
    addresses: addressesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
