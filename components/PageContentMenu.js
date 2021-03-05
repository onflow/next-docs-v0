import xw from "xwind";

const MenuItem = ({ title, url }) => {
  return (
    <a href={url}>
      <li css={xw`-ml-1 pl-4`}>{title}</li>
    </a>
  );
};

const PageContentMenu = ({ toc }) => {
  return (
    <aside css={xw`flex-none w-64 dark:bg-gray-900 pt-48`}>
      <ul
        css={xw`sticky text-sm flex flex-col space-y-2 border-l border-gray-100 dark[border-gray-800 text-white]`}
      >
        {toc.map((heading) => {
          return <MenuItem title={heading.title} url={heading.url} />;
        })}
      </ul>
    </aside>
  );
};

export default PageContentMenu;
