import React from "react";
import xw from "xwind";

const Layout = ({ children }) => {
  return (
    <div css={xw`w-screen min-h-screen prose max-w-none dark[bg-gray-900]`}>
      {children}
    </div>
  );
};

export default Layout;
