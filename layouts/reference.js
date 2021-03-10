import xw from "xwind";

import CategoryMenu from "../components/CategoryMenu";
import Header from "../components/Header";
import LeftNav from "../components/LeftNav";
import PageContentMenu from "../components/PageContentMenu";
import TopicMenu from "../components/TopicMenu";

const Layout = ({ children, toc }) => {
  return (
    <div
      css={xw`flex text-sm md:text-base xl:text-lg font-light min-h-screen dark:bg-gray-900 overflow-hidden`}
    >
      <LeftNav />
      <main id="content-main" css={xw`w-main h-screen`}>
        <Header>
          <TopicMenu />
          <CategoryMenu />
        </Header>

        <div
          css={xw`w-full grid grid-cols-2 h-screen overflow-auto pt-32 pl-10 pb-32`}
        >
          <div
            css={xw`h-screen prose max-w-none max-w-7xl dark:prose-light prose-override font-thin`}
          >
            {children}
          </div>
          <div css={xw`pt-20 pl-10`}>
            <PageContentMenu toc={toc} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
