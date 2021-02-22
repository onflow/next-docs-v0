import { Global } from "@emotion/react";

import React, { useContext } from "react";

import xw from "xwind";

import { RiMoonLine, RiSunLine } from "react-icons/ri";
import { GoTools } from "react-icons/go";
import { IoHelpBuoy, IoHome } from "react-icons/io5";
import { FaDiscord, FaTwitter, FaDiscourse } from "react-icons/fa";

import { ThemeContext } from "../components/ThemeContext";
import { Logo } from "../components/Logo";

const Layout = ({ children }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <>
      <div
        css={xw`flex text-sm md:text-base xl:text-lg font-light min-h-screen dark:bg-gray-900 overflow-x-hidden`}
      >
        <nav css={xw`flex flex-col bg-gray-50 dark:bg-black w-aside sticky`}>
          <div css={xw`flex h-20 items-center pl-10`}>
            <Logo />
          </div>
          <div
            css={xw`flex flex-col pl-10 font-semibold text-base dark:text-white h-full`}
          >
            <div css={xw`pb-10`}>
              <h4
                css={xw`text-xs text-gray-400 dark[text-gray-600] pb-2 tracking-tight`}
              >
                <div css={xw`flex items-center `}> HOME</div>
              </h4>
              <ul>
                <li>Introducing Flow</li>
              </ul>
            </div>
            <div css={xw`pb-10`}>
              <h4
                css={xw`text-xs text-gray-400 dark[text-gray-600] pb-2 tracking-tight`}
              >
                <div css={xw`flex items-center `}>DEVELOPER TOOLS</div>
              </h4>
              <ul>
                <li>Cadence</li>
                <li>Flow CLI</li>
                <li>SDKs</li>
              </ul>
            </div>
            <div css={xw`pb-10 flex-grow`}>
              <h4
                css={xw`text-xs text-gray-400 dark[text-gray-600] pb-2 tracking-tight`}
              >
                <div css={xw`flex items-center `}> SUPPORT</div>
              </h4>
              <div>Forum</div>
              <div>FAQ</div>
            </div>
            <div css={xw`pb-10 text-lg flex space-x-2 w-full`}>
              <FaDiscord />
              <FaTwitter />
              <FaDiscourse />
            </div>
          </div>
        </nav>
        <main css={xw`w-main overflow-x-hidden`}>
          <div css={xw`overflow-x-hidden overflow-y-scroll h-screen`}>
            <header
              css={xw`flex absolute w-main h-20 z-10 bg-white dark:bg-gray-900`}
            >
              <button
                css={xw`flex justify-center pl-10 h-full items-center`}
                type="button"
                onClick={() => setTheme(isDark ? "light" : "dark")}
              >
                <span css={xw`text-sm dark:text-indigo-400`}>
                  {isDark ? <RiSunLine /> : <RiMoonLine />}
                </span>
              </button>
            </header>
            <div css={xw`w-full flex`}>
              <div
                css={xw`prose dark:prose-light prose-override max-w-none font-thin px-10 pt-20`}
              >
                {children}
              </div>
              <aside css={xw`flex-none w-64 dark:bg-gray-900`}></aside>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Layout;
