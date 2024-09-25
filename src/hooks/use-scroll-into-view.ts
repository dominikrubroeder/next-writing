import { RefObject, useCallback } from "react";

type ScrollIntoViewOptions = {
  behavior?: "auto" | "smooth";
  block?: "start" | "center" | "end" | "nearest";
  inline?: "start" | "center" | "end" | "nearest";
};

const useScrollIntoView = () => {
  return useCallback(
    (
      elementRef: RefObject<HTMLElement>,
      options: ScrollIntoViewOptions = { behavior: "smooth", block: "start" },
    ) => {
      if (elementRef.current) {
        elementRef.current.scrollIntoView(options);
      }
    },
    [],
  );
};

export default useScrollIntoView;
