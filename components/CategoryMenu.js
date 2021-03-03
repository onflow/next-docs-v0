import xw from "xwind";

const CategoryMenu = () => {
  return (
    <div css={xw`flex items-center`}>
      <h3 css={xw`font-thin flex items-center self-center pl-10 pr-4 h-full`}>
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
  );
};

export default CategoryMenu;
