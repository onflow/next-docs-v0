import React, { createContext, useCallback, useState, useContext } from "react";

const PageContext = createContext({});
export const usePageContext = () => useContext(PageContext);

export const PageContextProvider = ({ children }) => {
  const [currentHeading, setCurrentHeading] = useState("");

  const headingInView = useCallback((inView, headingText) => {
    if (inView) {
      setCurrentHeading(headingText);
    }
  }, []);

  return (
    <PageContext.Provider value={{ headingInView, currentHeading }}>
      {children}
    </PageContext.Provider>
  );
};
