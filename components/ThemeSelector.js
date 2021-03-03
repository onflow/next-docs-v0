import { useContext } from "react";
import xw from "xwind";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

import { ThemeContext } from "../components/ThemeContext";

const ThemeSelector = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div css={xw`flex`}>
      <button
        css={xw`pr-10 flex justify-center pl-10 h-full items-center`}
        type="button"
        onClick={() => setTheme(isDark ? "light" : "dark")}
      >
        <span css={xw`text-sm text-blue-400 dark:text-yellow-400`}>
          {isDark ? <RiSunLine /> : <RiMoonLine />}
        </span>
      </button>
    </div>
  );
};

export default ThemeSelector;
