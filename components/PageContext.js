import React, { createContext, useCallback, useState } from "react";

export const PageContext = createContext({});

export const PageContextProvider = ({ children }) => {
  const [currentHeading, setCurrentHeading] = useState("");
  const headingInView = useCallback((inView, headingText) => {
    if (inView) {
      setCurrentHeading(headingText);
    } else {
      // console.log(false, headingText);
    }
  }, []);

  return (
    <PageContext.Provider value={{ headingInView, currentHeading }}>
      {children}
    </PageContext.Provider>
  );
};
