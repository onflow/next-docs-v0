import React, { useContext } from "react";

import xw from "xwind";

import { ThemeContext } from "../components/ThemeContext";

const Layout = ({ children }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div
      css={xw`flex text-sm md:text-base xl:text-lg font-light min-h-screen dark:bg-gray-900 overflow-x-hidden`}
    >
      <nav css={xw`bg-green-100 dark:bg-gray-800 w-aside sticky`}></nav>
      <main css={xw`w-main overflow-x-hidden`}>
        <div css={xw`overflow-x-hidden overflow-y-scroll h-screen`}>
          <header
            css={xw`absolute w-full h-20 z-10 bg-white dark:bg-gray-900`}
          ></header>
          <div css={xw`w-full flex`}>
            <div
              css={xw`prose dark:prose-light prose-override max-w-none font-thin px-10 pt-20`}
            >
              {children}
            </div>
            <aside css={xw`flex-none w-64 dark:bg-gray-800`}></aside>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
