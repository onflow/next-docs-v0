import xw from "xwind";

import { AnimateSharedLayout, motion } from "framer-motion";

import { usePageContext } from "./PageContext";

const MenuItem = ({ title, url, active }) => {
  return (
    <li>
      <a href={url} css={xw`flex items-center relative -ml-1 pl-4`}>
        {active && (
          <motion.div
            css={xw`border-l-4 h-6 absolute -left-0`}
            layoutId="menu-item"
            initial={false}
            animate={xw`border-green-400`}
          />
        )}
        {title}
      </a>
    </li>
  );
};

const PageContentMenu = ({ menuName, toc }) => {
  const { currentHeading } = usePageContext();
  return (
    <aside css={xw`fixed dark:bg-gray-900`}>
      <AnimateSharedLayout>
        <h2 css={xw`tracking-wide font-semibold pb-2 dark[text-white]`}>
          {menuName || "Contents"}
        </h2>
        <ul
          css={xw`text-sm w-60 flex flex-col space-y-2 dark[text-white] border-l dark[border-gray-800]`}
        >
          {toc.map((heading) => {
            return (
              <MenuItem
                key={heading.url}
                title={heading.title}
                url={heading.url}
                active={currentHeading === heading.title}
              />
            );
          })}
        </ul>
      </AnimateSharedLayout>
    </aside>
  );
};

export default PageContentMenu;
