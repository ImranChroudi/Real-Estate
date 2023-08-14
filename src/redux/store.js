import { configureStore } from '@reduxjs/toolkit';
import realEstateSlice from './slice';

const store = configureStore({
  reducer: {
    realEstateRedux: realEstateSlice.reducer,
  },
});

export default store;
