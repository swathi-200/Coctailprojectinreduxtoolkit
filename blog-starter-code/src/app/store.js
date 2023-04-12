import { configureStore } from '@reduxjs/toolkit';
import blogSlice from '../features/blogs/BlogSlice';
import userslice from '../features/users/userslice';
export const store = configureStore({
  reducer: {
    blog:blogSlice.reducer,
    user:userslice.reducer,
  },
});
