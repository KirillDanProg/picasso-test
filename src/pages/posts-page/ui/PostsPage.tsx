import { useLazyGetPostsQuery } from "@/entities/post/model/api/post";
import { Post } from "@/entities/post/ui/Post";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/redux-hooks";
import { useRef, useCallback, useEffect } from "react";
import { Virtuoso } from "react-virtuoso";
import { postsActions } from "../model/slice/posts-slice";
import {
  selectCurrentPage,
  selectPosts,
  selectScrollPosition,
  selectTotalCount,
} from "../model/selectors/posts-selector";
import { useScrollPosition } from "@/shared/lib/hooks/use-scroll-position";
import s from "./PostsPage.module.scss";
import { Loader } from "@/shared/ui/Loader";

const LIMIT_PER_PAGE = 10;

export const PostsPage = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);
  const totalCount = useAppSelector(selectTotalCount);
  const currentPage = useAppSelector(selectCurrentPage);
  const scrollPosition = useAppSelector(selectScrollPosition);
  const [fetchPosts, { isLoading }] = useLazyGetPostsQuery();
  const firstMount = useRef(true);

  //memoize position to scroll back after redirect to post details
  useScrollPosition();

  const loadMore = useCallback(async () => {
    if ((!firstMount.current && totalCount <= posts.length) || isLoading) {
      return;
    }
    if (posts.length && firstMount.current) {
      firstMount.current = false;
      return;
    }
    const { data } = await fetchPosts({
      _page: currentPage,
      _limit: LIMIT_PER_PAGE,
    });

    if (!data) {
      throw new Error("error");
    }
    dispatch(postsActions.setTotalCount({ totalCount: data.totalCount }));
    dispatch(postsActions.setNextPage());
    dispatch(postsActions.setPosts({ newPosts: data.posts }));
    firstMount.current = false;
  }, [currentPage, isLoading, totalCount, posts.length, dispatch, fetchPosts]);

  useEffect(() => {
    loadMore();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Virtuoso
          className={s.container}
          useWindowScroll
          initialScrollTop={scrollPosition.top}
          data={posts}
          endReached={loadMore}
          itemContent={(_index, post) => {
            return <Post key={post.id} post={post} />;
          }}
          context={{ endOfList: totalCount <= posts.length }}
          components={{ Footer }}
        />
      )}
    </>
  );
};

type Props = {
  context?: { endOfList: boolean };
};
const Footer = ({ context }: Props) => {
  return <>{!context?.endOfList && <Loader />}</>;
};
