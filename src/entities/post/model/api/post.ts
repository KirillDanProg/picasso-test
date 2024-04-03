import { api } from "@/shared/api";
import type { PostType } from "../..";

const postApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query<PostType[], { start: number }>({
      query: ({ start }) => ({
        url: "/posts",
        method: "GET",
        params: {
          _limit: 8,
          _start: start,
        },
      }),
    }),
  }),
});

export const { useGetPostsQuery } = postApi;
