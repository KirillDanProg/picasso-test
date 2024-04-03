import { api } from "@/shared/api";
import type { PostType } from "../..";

const postApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query<
      { posts: PostType[]; totalCount: number },
      { _page: number; _limit: number }
    >({
      query: (params) => ({
        url: "/posts",
        method: "GET",
        params,
      }),
      transformResponse: (response: PostType[], meta) => {
        const totalCount = Number(meta?.response?.headers.get("x-total-count"));
        return { posts: response, totalCount };
      },
    }),
    getPostById: build.query<PostType, { id: string }>({
      query: ({ id }) => ({
        url: `/posts/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPostsQuery, useLazyGetPostsQuery, useGetPostByIdQuery } =
  postApi;
