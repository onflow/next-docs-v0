import { useInterpret } from "@xstate/react";

import React, { createContext, useCallback, useState, useContext } from "react";

import navMachine from "../lib/navigationMachine";

const PageContext = createContext({});
export const usePageContext = () => useContext(PageContext);

export const PageContextProvider = ({ children }) => {
  const service = useInterpret(navMachine);

  const [currentHeading, setCurrentHeading] = useState("");

  const headingInView = useCallback((inView, headingText) => {
    if (inView) {
      setCurrentHeading(headingText);
    }
  }, []);

  return (
    <PageContext.Provider
      value={{ headingInView, currentHeading, nav: service }}
    >
      {children}
    </PageContext.Provider>
  );
};
