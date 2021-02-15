import React, { useContext } from "react";
import xw from "xwind";

import { ThemeContext } from "../components/ThemeContext";

const Layout = ({ children }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const isDark = theme === "dark";
  return (
    <div
      css={xw`text-sm md:text-lg min-h-screen prose dark[prose-light bg-gray-900] prose-override max-w-none`}
    >
      <button type="button" onClick={() => setTheme(isDark ? "light" : "dark")}>
        {isDark ? "light" : "dark"}
      </button>
      {children}
    </div>
  );
};

export default Layout;
