import { useIntersectionObserver } from "@asyarb/use-intersection-observer";

import { useEffect, useRef } from "react";

const SectionHeading = ({ children }) => {
  const ref = useRef();

  // Get the visibility boolean directly from the hook:
  const inView = useIntersectionObserver({
    ref,
    options: {
      threshold: 0.25,
      triggerOnce: true,
    },
  });

  useEffect(() => {
    if (inView) {
      console.log("In View", children);
    }
  }, [inView]);

  return <h2>{children}</h2>;
};

export default SectionHeading;
