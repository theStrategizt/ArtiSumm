import { configureStore } from '@reduxjs/toolkit';
import { articleApi } from './article';  // Your API slice

export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer, // Adding the API reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware), // Adding the API middleware
});


