import xw from "xwind";

const MenuItem = ({ title, url }) => {
  return (
    <a href={url}>
      <li css={xw`-ml-1 pl-4`}>{title}</li>
    </a>
  );
};

const PageContentMenu = ({ toc, height }) => {
  return (
    <aside style={{ height }} css={xw`relative dark:bg-gray-900`}>
      <ul
        css={xw`fixed text-sm w-60 flex flex-col space-y-2 border-l border-gray-100 dark[border-gray-800 text-white]`}
      >
        {toc.map((heading) => {
          return (
            <MenuItem
              key={heading.url}
              title={heading.title}
              url={heading.url}
            />
          );
        })}
      </ul>
    </aside>
  );
};

export default PageContentMenu;
