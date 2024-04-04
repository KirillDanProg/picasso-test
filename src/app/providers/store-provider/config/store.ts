import { postsReducer } from "@/pages/posts-page";
import { api } from "@/shared/api";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
