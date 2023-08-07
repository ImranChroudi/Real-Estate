import { configureStore } from '@reduxjs/toolkit';
import realEstateSlice from './createSlice';

const store = configureStore({
  reducer: {
    motoRedux: realEstateSlice.reducer,
  },
});

export default store;
