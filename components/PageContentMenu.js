import xw from "xwind";
import { AnimateSharedLayout, motion } from 'framer-motion'
import { useContext } from 'react'

import { PageContext } from './PageContext'

const MenuItem = ({ title, url, active }) => {
  return (
   
    <a href={url}>
      {active && <motion.div layoutId="menu-item" />}
      <li css={xw`-ml-1 pl-4 border-l`}>{title}</li>
    </a>
   
  );
};

const PageContentMenu = ({ toc }) => {
  const { headingActive } = useContext(PageContext)
  return (
    <aside css={xw`relative dark:bg-gray-900`}>
      <AnimateSharedLayout>
      <ul
        css={xw`fixed text-sm w-60 flex flex-col space-y-2 border-l border-gray-100 dark[border-gray-800 text-white]`}
      >
        {toc.map((heading) => {
          return (
            <MenuItem
              key={heading.url}
              title={heading.title}
              url={heading.url}
              active={headingActive}
            />
          );
        })}
      </ul>
      </AnimateSharedLayout>
    </aside>
  );
};

export default PageContentMenu;
 