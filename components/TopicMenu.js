import xw from "xwind";

export const TopicMenu = () => {
  return (
    <ul
      css={xw`flex flex-grow h-16 font-semibold tracking-tight items-center space-x-5 pl-10 border-b dark[border-green-800]`}
    >
      <li className="group" css={xw`cursor-pointer pr-5 hover[text-green-400]`}>
        Using Flow & FLOW
        <div
          css={xw`absolute border-b p-10 py-5 hidden group-hover[flex w-full -mt-0.5] top-16 -left-0 bg-white dark[bg-black border-green-500]`}
        >
          <ul css={xw`flex`}>
            <li css={xw`w-80 p-5`}>
              {" "}
              <h3 css={xw`text-base text-black dark[text-gray-100]`}>
                Experiences
              </h3>
              <p
                css={xw`text-sm font-thin tracking-normal text-gray-800 dark[text-gray-200]`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </li>
            <li css={xw`w-80 p-5`}>
              {" "}
              <h3 css={xw`text-base text-black dark[text-gray-100]`}>
                Staking & Delegating
              </h3>
              <p
                css={xw`text-sm font-thin tracking-normal text-gray-800 dark[text-gray-200]`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </li>
            <li css={xw`w-80 p-5`}>
              {" "}
              <h3 css={xw`text-base text-black dark[text-gray-100]`}>Voting</h3>
              <p
                css={xw`text-sm font-thin tracking-normal text-gray-800 dark[text-gray-200]`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </li>
          </ul>
        </div>
      </li>
      <li className="group" css={xw`cursor-pointer pr-5 hover[text-green-400]`}>
        Build Experiences on Flow
        <div
          css={xw`absolute border-b p-10 py-5 hidden group-hover[flex w-full -mt-0.5] top-16 -left-0 bg-white dark[bg-black border-green-500]`}
        >
          <ul css={xw`flex`}>
            <li css={xw`w-80 p-5`}>
              {" "}
              <h3 css={xw`text-base text-black dark[text-gray-100]`}>
                Defining Your Experience
              </h3>
              <p
                css={xw`text-sm font-thin tracking-normal text-gray-800 dark[text-gray-200]`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </li>
            <li css={xw`w-80 p-5`}>
              {" "}
              <h3 css={xw`text-base text-black dark[text-gray-100]`}>
                Developing Your Experience
              </h3>
              <p
                css={xw`text-sm font-thin tracking-normal text-gray-800 dark[text-gray-200]`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </li>
            <li css={xw`w-80 p-5`}>
              {" "}
              <h3 css={xw`text-base text-black dark[text-gray-100]`}>
                Sharing Your Experience with Users
              </h3>
              <p
                css={xw`text-sm font-thin tracking-normal text-gray-800 dark[text-gray-200]`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
              <h3 css={xw`text-base text-black dark[text-gray-100]`}>
                Network Architecture
              </h3>
              <p
                css={xw`text-sm font-thin tracking-normal text-gray-800 dark[text-gray-200]`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </li>
            <li css={xw`w-80 p-5`}>
              {" "}
              <h3 css={xw`text-base text-black dark[text-gray-100]`}>Epochs</h3>
              <p
                css={xw`text-sm font-thin tracking-normal text-gray-800 dark[text-gray-200]`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </li>
            <li css={xw`w-80 p-5`}>
              {" "}
              <h3 css={xw`text-base text-black dark[text-gray-100]`}>
                Rewards & Slashing
              </h3>
              <p
                css={xw`text-sm font-thin tracking-normal text-gray-800 dark[text-gray-200]`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  );
};

export default TopicMenu;
