import { useCallback, useRef } from "react";

export const useThrottle = (
  callback: (...args: unknown[]) => void,
  delay: number
) => {
  const throttleRef = useRef(false);
  return useCallback(
    (...args: unknown[]) => {
      if (!throttleRef.current) {
        throttleRef.current = true;
        callback(...args);
        setTimeout(() => {
          throttleRef.current = false;
        }, delay);
      }
    },
    [callback, delay]
  );
};
