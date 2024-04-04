import type { PostType } from "@/entities/post";

export type ScrollType = {
  top: number;
};

export type InitialPostsState = {
  scrollPosition: ScrollType;
  items: PostType[];
  page: number;
  totalCount: number;
};
