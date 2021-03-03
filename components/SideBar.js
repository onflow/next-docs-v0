import xw from "xwind";

import { FaDiscord, FaTwitter, FaDiscourse } from "react-icons/fa";

import { Logo } from "../components/Logo";

const Sidebar = (props) => {
  return (
    <nav
      css={xw`grid grid-flow-col grid-rows-sidebar grid-cols-1 pl-10 bg-gray-50 dark:bg-black w-aside sticky overflow-hidden`}
    >
      <div css={xw`flex items-center`}>
        <Logo />
      </div>
      <div css={xw`py-2`}>content</div>
      <div css={xw`flex flex-col font-semibold text-base dark:text-white h-20`}>
        <div css={xw`pb-10 text-lg flex space-x-2 w-full`}>
          <FaDiscord />
          <FaTwitter />
          <FaDiscourse />
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
