import type { PostType } from "@/entities/post";
import { useLazyGetPostsQuery } from "@/entities/post/model/api/post";
import { Post } from "@/entities/post/ui/Post";
import { useState, useRef, useCallback, useEffect } from "react";
import { Virtuoso } from "react-virtuoso";

const LIMIT_PER_PAGE = 10;
export const PostsPage = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [fetchPosts, { isLoading }] = useLazyGetPostsQuery();
  const firstMount = useRef(true);

  const loadMore = useCallback(async () => {
    if ((!firstMount.current && totalCount <= posts.length) || isLoading) {
      return;
    }
    const { data } = await fetchPosts({
      _page: currentPage,
      _limit: LIMIT_PER_PAGE,
    });
    if (!data) {
      throw new Error("error");
    }
    setTotalCount(data.totalCount);
    setPosts((prev) => {
      return [...prev, ...data.posts];
    });
    setCurrentPage((prev) => prev + 1);
    firstMount.current = false;
  }, [setPosts, currentPage, isLoading]);

  useEffect(() => {
    loadMore();
  }, []);

  return (
    <Virtuoso
      useWindowScroll
      data={posts}
      endReached={loadMore}
      itemContent={(_index, post) => {
        return <Post key={post.id} post={post} />;
      }}
    />
  );
};
