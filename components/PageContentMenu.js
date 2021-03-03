import xw from "xwind";

const PageContentMenu = () => {
  return (
    <aside css={xw`flex-none w-64 dark:bg-gray-900 pt-48`}>
      <ul
        css={xw`text-sm flex flex-col space-y-2 border-l border-gray-100 dark[border-gray-800 text-white]`}
      >
        <li css={xw`border-l-4 -ml-1 pl-4  border-green-400 font-semibold`}>
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
  );
};

export default PageContentMenu;
