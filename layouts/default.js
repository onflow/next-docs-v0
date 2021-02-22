import { Global } from "@emotion/react";

import React, { useContext } from "react";

import xw from "xwind";

import { RiMoonLine, RiSunLine } from "react-icons/ri";
import { FaDiscord, FaTwitter, FaDiscourse } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";

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
                <div css={xw`flex items-center`}>DEVELOPER TOOLS</div>
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
              css={xw`flex absolute w-main z-10 bg-white dark:bg-gray-900 border-b border-gray-100 dark[border-gray-800 text-white]`}
            >
              <div css={xw`flex flex-col flex-grow`}>
                <ul
                  css={xw`flex h-16 font-semibold tracking-tight items-center space-x-10 pl-10  border-b border-gray-200 dark[border-green-800]`}
                >
                  <li>Acquire & Use Flow Tokens</li>
                  <li>Build Experiences on Flow</li>
                  <li css={xw`flex-grow`}>Join The Network</li>
                  <div css={xw`text-sm flex items-center`}>
                    <div css={xw`pr-2`}>Feedback</div>
                    <BsChatDots />
                  </div>
                  <button
                    css={xw`pr-10 flex justify-center pl-10 h-full items-center`}
                    type="button"
                    onClick={() => setTheme(isDark ? "light" : "dark")}
                  >
                    <span css={xw`text-sm dark:text-indigo-400`}>
                      {isDark ? <RiSunLine /> : <RiMoonLine />}
                    </span>
                  </button>
                </ul>
                <ul
                  css={xw`text-sm h-10 flex flex-grow items-center space-x-8 pl-10`}
                >
                  <li css={xw`p-2 pl-0`}>Overview</li>
                  <li css={xw`p-2`}>Reference</li>
                  <li css={xw`p-2`}>Guides</li>
                  {/* <li>Samples</li>
                  <li>Support</li> */}
                  <li css={xw`p-2`}>Resources</li>
                </ul>
              </div>
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
