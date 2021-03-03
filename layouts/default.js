import xw from "xwind";

import LeftNav from "../components/LeftNav";
import Header from "../components/Header";
import TopicMenu from "../components/TopicMenu";
import ThemeSelector from "../components/ThemeSelector";

const Layout = ({ children }) => {
  return (
    <div
      css={xw`flex text-sm md:text-base xl:text-lg font-light min-h-screen dark:bg-gray-900 overflow-x-hidden`}
    >
      <LeftNav />
      <main css={xw`w-main overflow-x-hidden`}>
        <Header>
          <TopicMenu />
          <div css={xw`absolute right-0 top-10`}>
            <ThemeSelector />
          </div>
        </Header>
        <div css={xw`w-full flex pt-16`}>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
