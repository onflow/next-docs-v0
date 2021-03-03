import xw from "xwind";

import ContentsMenu from "../components/ContentsMenu";
import Header from "../components/Header";
import TopicMenu from "../components/TopicMenu";
import Sidebar from "../components/Sidebar";
import ThemeSelector from "../components/ThemeSelector";
import CategoryMenu from "../components/CategoryMenu";

const Layout = ({ children }) => {
  return (
    <div
      css={xw`flex text-sm md:text-base xl:text-lg font-light min-h-screen dark:bg-gray-900 overflow-x-hidden`}
    >
      <Sidebar />
      <main css={xw`w-main overflow-x-hidden`}>
        <Header>
          <TopicMenu />
          <CategoryMenu />
          <div css={xw`absolute right-0 top-6`}>
            <ThemeSelector />
          </div>
        </Header>

        <div css={xw`w-full flex`}>
          <div
            css={xw`prose dark:prose-light prose-override max-w-none font-thin px-10 pt-20`}
          >
            {children}
          </div>
          <ContentsMenu />
        </div>
      </main>
    </div>
  );
};

export default Layout;
