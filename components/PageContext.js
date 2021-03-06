import React, { createContext,useCallback} from "react";

export const PageContext = createContext({});

export const PageContextProvider = ({children }) => {

  const headingInView = useCallback(
    (args) => {
      console.log('??', args)
    },
    [headingInView],
  )

  return (
    <PageContext.Provider value={{ headingInView }}>
      {children}
    </PageContext.Provider>
  );
};
