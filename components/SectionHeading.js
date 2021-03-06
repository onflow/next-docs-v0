import { useContext, useRef } from "react";
import {PageContext} from './PageContext'
import { InView } from 'react-intersection-observer';

const SectionHeading = ({ children: headingText }) => {
  const headingRef = useRef(null)
  const { headingInView} = useContext(PageContext)
    return (
      <InView as="div" onChange={(inView) => headingInView(inView, headingText)}>
        <h2 ref={headingRef}>
          {headingText}
        </h2>
      </InView>
    );

};

export default SectionHeading;
