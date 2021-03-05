import { useRef } from "react";

import xw from "xwind";

import {
  useViewportScroll,
  useTransform,
  useSpring,
  motion,
} from "framer-motion";

import CategoryMenu from "../components/CategoryMenu";
import Header from "../components/Header";
import LeftNav from "../components/LeftNav";
import PageContentMenu from "../components/PageContentMenu";
import TopicMenu from "../components/TopicMenu";

const Layout = ({ children, toc }) => {
  const scrollRef = useRef(null);
  const { scrollY } = useViewportScroll();

  return (
    <div
      css={xw`flex text-sm md:text-base xl:text-lg font-light min-h-screen dark:bg-gray-900 overflow-hidden`}
    >
      <LeftNav />
      <main css={xw`w-main h-screen`}>
        <Header>
          <TopicMenu />
          <CategoryMenu />
        </Header>

        <div css={xw`w-full flex h-screen overflow-scroll`}>
          <div
            css={xw`h-screen prose dark:prose-light prose-override font-thin px-10 pt-20`}
          >
            {children}
          </div>
          <div css={xw`absolute left-main`}>
            <PageContentMenu toc={toc} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
