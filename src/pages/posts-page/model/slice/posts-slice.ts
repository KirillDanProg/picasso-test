import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { InitialPostsState, ScrollType } from "../types";
import type { PostType } from "@/entities/post";

const initialState: InitialPostsState = {
  scrollPosition: {
    top: 0,
  },
  items: [],
  page: 1,
  totalCount: 0,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, { payload }: PayloadAction<{ newPosts: PostType[] }>) => {
      state.items = [...state.items, ...payload.newPosts];
    },
    setTotalCount: (
      state,
      { payload }: PayloadAction<{ totalCount: number }>
    ) => {
      state.totalCount = payload.totalCount;
    },
    setNextPage: (state) => {
      state.page = state.page + 1;
    },
    setScrollPosition: (
      state,
      { payload }: PayloadAction<{ position: ScrollType }>
    ) => {
      state.scrollPosition = payload.position;
    },
  },
});
export const { reducer: postsReducer } = postsSlice;
export const { actions: postsActions } = postsSlice;
