import { useEffect } from "react";

const SectionHeading = ({ children }) => {
  if (process.browser) {
    const { useIntersectionObserver } = require("react-use-observer");
    const [ref, intersectionObserverEntry] = useIntersectionObserver({
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    useEffect(() => {
      console.log("In View", children[1]);
    }, [intersectionObserverEntry]);
    return (
      // NOTE: a tags are inserted into h2 using remark-autolink-headings
      // in lib/getMarkdown.js ... This might not be the best way to
      // provide the id for these elements (They should match the sidebar links)
      <h2 id={""} ref={ref}>
        {children}
      </h2>
    );
  } else {
    return <h2>{children}</h2>;
  }
};

export default SectionHeading;
