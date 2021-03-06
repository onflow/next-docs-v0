import { useContext, useRef } from "react";

import { InView } from "react-intersection-observer";

import GithubSlugger from "github-slugger";

import { PageContext } from "./PageContext";
const slugger = new GithubSlugger();

const SectionHeading = ({ children: headingText }) => {
  const headingRef = useRef(null);
  const { headingInView } = useContext(PageContext);
  slugger.reset();
  const slug = slugger.slug(headingText);
  return (
    <InView
      as="div"
      onChange={(inView) => {
        headingInView(inView, headingText, slug);
      }}
    >
      <h2 id={slug} ref={headingRef}>
        {headingText}
      </h2>
    </InView>
  );
};

export default SectionHeading;
