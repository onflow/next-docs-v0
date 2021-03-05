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

        <div css={xw`w-full flex h-screen overflow-auto`}>
          <div
            css={xw`h-screen prose dark:prose-light prose-override font-thin`}
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
