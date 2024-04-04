import { postsActions } from "@/pages/posts-page";
import { useEffect } from "react";
import { useThrottle } from "./use-throttle";
import { useAppDispatch } from "./redux-hooks";

export const useScrollPosition = () => {
  const dispatch = useAppDispatch();

  const onScrollHandler = () => {
    const top = document.documentElement.scrollTop;
    dispatch(postsActions.setScrollPosition({ position: { top } }));
  };
  const throttledScroll = useThrottle(onScrollHandler, 500);

  useEffect(() => {
    window.addEventListener("scroll", throttledScroll);
    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, []);
};
