import { useContext } from "react";
import xw from "xwind";

const Header = ({ children }) => {
  return (
    <header
      css={xw`flex flex-col absolute w-main z-10 bg-white dark:bg-black dark[text-white]`}
    >
      {children}
    </header>
  );
};

export default Header;
