import { Global } from "@emotion/react";

import React, { useContext } from "react";

import xw from "xwind";

import { RiMoonLine, RiSunLine } from "react-icons/ri";
import {
  FaDiscord,
  FaTwitter,
  FaDiscourse,
  FaChevronRight,
} from "react-icons/fa";
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
                <li>Technical Primer</li>
              </ul>
            </div>
            <div css={xw`pb-10`}>
              <h4
                css={xw`text-xs text-gray-400 dark[text-gray-600] pb-2 tracking-tight`}
              >
                <div css={xw`flex items-center`}>DEVELOPER TOOLS</div>
              </h4>
              <ul>
                <li css={xw`text-green-400`}>Cadence</li>
                <li>Flow CLI</li>
                <li>SDKs</li>
              </ul>
            </div>
            <div css={xw`pb-10 flex-grow`}>
              <h4
                css={xw`text-xs text-gray-400 dark[text-gray-600] pb-2 tracking-tight`}
              >
                <div css={xw`flex items-center`}> SUPPORT</div>
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
              css={xw`flex absolute w-main z-10 bg-white dark:bg-black border-b border-gray-100 dark[border-gray-800 text-white]`}
            >
              <div css={xw`flex flex-col flex-grow`}>
                <ul
                  css={xw`flex h-16 font-semibold tracking-tight items-center space-x-5 pl-10  border-b border-gray-200 dark[border-green-800]`}
                >
                  <li
                    className="group"
                    css={xw`cursor-pointer pr-5 hover[text-green-400]`}
                  >
                    Using Flow & FLOW
                    <div
                      css={xw`absolute border-b p-10 py-5 hidden group-hover[flex w-full -mt-0.5] top-16 -left-0 bg-white dark[bg-black border-green-500]`}
                    >
                      <ul css={xw`flex`}>
                        <li css={xw`w-80 p-5`}>
                          {" "}
                          <h3
                            css={xw`text-base text-black dark[text-gray-100]`}
                          >
                            Experiences
                          </h3>
                          <p
                            css={xw`text-sm font-thin tracking-normal text-gray-800 dark[text-gray-200]`}
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco.
                          </p>
                        </li>
                        <li css={xw`w-80 p-5`}>
                          {" "}
                          <h3
                            css={xw`text-base text-black dark[text-gray-100]`}
                          >
                            Staking & Delegating
                          </h3>
                          <p
                            css={xw`text-sm font-thin tracking-normal text-gray-800 dark[text-gray-200]`}
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor.
                          </p>
                        </li>
                        <li css={xw`w-80 p-5`}>
                          {" "}
                          <h3
                            css={xw`text-base text-black dark[text-gray-100]`}
                          >
                            Voting
                          </h3>
                          <p
                            css={xw`text-sm font-thin tracking-normal text-gray-800 dark[text-gray-200]`}
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li
                    className="group"
                    css={xw`cursor-pointer pr-5 hover[text-green-400]`}
                  >
                    Build Experiences on Flow
                    <div
                      css={xw`absolute border-b p-10 py-5 hidden group-hover[flex w-full -mt-0.5] top-16 -left-0 bg-white dark[bg-black border-green-500]`}
                    >
                      <ul css={xw`flex`}>
                        <li css={xw`w-80 p-5`}>
                          {" "}
                          <h3
                            css={xw`text-base text-black dark[text-gray-100]`}
                          >
                            Defining Your Experience
                          </h3>
                          <p
                            css={xw`text-sm font-thin tracking-normal text-gray-800 dark[text-gray-200]`}
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor.
                          </p>
                        </li>
                        <li css={xw`w-80 p-5`}>
                          {" "}
                          <h3
                            css={xw`text-base text-black dark[text-gray-100]`}
                          >
                            Developing Your Experience
                          </h3>
                          <p
                            css={xw`text-sm font-thin tracking-normal text-gray-800 dark[text-gray-200]`}
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </li>
                        <li css={xw`w-80 p-5`}>
                          {" "}
                          <h3
                            css={xw`text-base text-black dark[text-gray-100]`}
                          >
                            Sharing Your Experience with Users
                          </h3>
                          <p
                            css={xw`text-sm font-thin tracking-normal text-gray-800 dark[text-gray-200]`}
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li
                    className="group"
                    css={xw`cursor-pointer pr-5 hover[text-green-400] flex-grow`}
                  >
                    Join the Network
                    <div
                      css={xw`absolute border-b p-10 py-5 hidden group-hover[flex w-full -mt-0.5] top-16 -left-0 bg-white dark[bg-black border-green-500]`}
                    >
                      <ul css={xw`flex`}>
                        <li css={xw`w-80 p-5`}>
                          {" "}
                          <h3
                            css={xw`text-base text-black dark[text-gray-100]`}
                          >
                            Network Architecture
                          </h3>
                          <p
                            css={xw`text-sm font-thin tracking-normal text-gray-800 dark[text-gray-200]`}
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor.
                          </p>
                        </li>
                        <li css={xw`w-80 p-5`}>
                          {" "}
                          <h3
                            css={xw`text-base text-black dark[text-gray-100]`}
                          >
                            Epochs
                          </h3>
                          <p
                            css={xw`text-sm font-thin tracking-normal text-gray-800 dark[text-gray-200]`}
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </li>
                        <li css={xw`w-80 p-5`}>
                          {" "}
                          <h3
                            css={xw`text-base text-black dark[text-gray-100]`}
                          >
                            Rewards & Slashing
                          </h3>
                          <p
                            css={xw`text-sm font-thin tracking-normal text-gray-800 dark[text-gray-200]`}
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <div css={xw`text-sm flex items-center`}>
                    <div css={xw`pr-2`}>Feedback</div>
                    <BsChatDots />
                  </div>
                  <button
                    css={xw`pr-10 flex justify-center pl-10 h-full items-center`}
                    type="button"
                    onClick={() => setTheme(isDark ? "light" : "dark")}
                  >
                    <span css={xw`text-sm text-blue-400 dark:text-yellow-400`}>
                      {isDark ? <RiSunLine /> : <RiMoonLine />}
                    </span>
                  </button>
                </ul>
                <div css={xw`flex`}>
                  <h3
                    css={xw`font-thin flex items-center self-center pl-10 pr-4 h-full`}
                  >
                    Cadence:
                  </h3>
                  <ul
                    css={xw`dark[bg-gray-900] text-sm h-10 flex flex-grow items-center space-x-8 pl-10`}
                  >
                    <li css={xw`-ml-2 p-2`}>Overview</li>
                    <li css={xw`p-2 border-b-4 border-green-400 font-semibold`}>
                      Reference
                    </li>
                    <li css={xw`p-2`}>Guides</li>
                    {/* <li>Samples</li>
                  <li>Support</li> */}
                    <li css={xw`p-2`}>Resources</li>
                  </ul>
                </div>
              </div>
            </header>
            <div css={xw`w-full flex`}>
              <div
                css={xw`prose dark:prose-light prose-override max-w-none font-thin px-10 pt-20`}
              >
                {children}
              </div>
              <aside css={xw`flex-none w-64 dark:bg-gray-900 pt-48`}>
                <ul
                  css={xw`text-sm flex flex-col space-y-2 border-l border-gray-100 dark[border-gray-800 text-white]`}
                >
                  <li
                    css={xw`border-l-4 -ml-1 pl-4  border-green-400 font-semibold`}
                  >
                    Accounts
                  </li>
                  <li css={xw`-ml-1 pl-4`}>Syntax</li>
                  <li css={xw`-ml-1 pl-4`}>Constants and Variables</li>
                  <li css={xw`-ml-1 pl-4`}>Type Annotation</li>
                  <li css={xw`-ml-1 pl-4`}>Values & Types</li>
                  <li css={xw`-ml-1 pl-4`}>Operators</li>
                  <li css={xw`-ml-1 pl-4`}>Functions</li>
                  <li css={xw`-ml-1 pl-4`}>Control Flow</li>
                  <li css={xw`-ml-1 pl-4`}>Scope</li>
                  <li css={xw`-ml-1 pl-4`}>Type Safety</li>
                  <li css={xw`-ml-1 pl-4`}>Type Inference</li>
                  <li css={xw`-ml-1 pl-4`}>Composite Types</li>
                </ul>
              </aside>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Layout;
