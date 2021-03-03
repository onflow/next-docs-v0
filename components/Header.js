import { useContext } from "react";
import xw from "xwind";

const Header = ({ children }) => {
  return (
    <header
      css={xw`flex flex-col absolute w-full z-10 bg-white dark:bg-black border-b border-gray-200 dark[border-green-800 text-white]`}
    >
      {children}
    </header>
  );
};

export default Header;
