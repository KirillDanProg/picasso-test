import type { RootState } from "@/app/providers/store-provider/config/store";

export const selectScrollPosition = (state: RootState) =>
  state.posts.scrollPosition;

export const selectPosts = (state: RootState) => state.posts.items;
export const selectCurrentPage = (state: RootState) => state.posts.page;
export const selectTotalCount = (state: RootState) => state.posts.totalCount;
