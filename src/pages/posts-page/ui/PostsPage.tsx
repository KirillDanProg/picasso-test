import { useGetPostsQuery, type PostType } from "@/entities/post";
import { Post } from "@/entities/post/ui/Post";
import { useState } from "react";
import { Virtuoso } from "react-virtuoso";

const START_LIST = 0;
const END_LIST = 93;

export const PostsPage = () => {
  const [startPosition, setStartPosition] = useState(0);

  const { data: posts = [] } = useGetPostsQuery({ start: startPosition });

  const fetchMorePosts = () => {
    setStartPosition((prev) => {
      return prev + 2 < END_LIST ? prev + 2 : prev;
    });
  };

  const fetchPrevPosts = () => {
    setStartPosition((prev) => {
      return prev - 2 > START_LIST ? prev - 2 : prev;
    });
  };
  const renderPosts = (index: number, post: PostType) => {
    // const post = posts[index];
    return <Post key={post.id} post={post} />;
  };

  return (
    <Virtuoso
      style={{ display: "flex", height: "100%" }}
      data={posts}
      itemContent={renderPosts}
      startReached={fetchPrevPosts}
      endReached={fetchMorePosts}

      // increaseViewportBy={50}
      // atBottomStateChange={(atBottom: boolean) => {
      //   console.log(atBottom);
      // }}
    />
  );
};
