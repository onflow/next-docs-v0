import { useEffect,useContext } from "react";
import {PageContext} from './PageContext'

const SectionHeading = ({ children }) => {
  const { headingInView } = useContext(PageContext)
  if (process.browser) {
    const { useIntersectionObserver } = require("react-use-observer");
    const [ref, entry] = useIntersectionObserver({
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    useEffect(() => {
      if (entry.intersectionRatio > 0) {
        headingInView(true, ref.current.id)
      } else {
        headingInView(false)
      }
    }, [entry.intersectionRatio]);

    return (
      <h2 id={""} ref={ref}>
        {children}
      </h2>
    );
  } else {
    return <h2>{children}</h2>;
  }
};

export default SectionHeading;
