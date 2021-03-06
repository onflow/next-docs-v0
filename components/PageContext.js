import React, { createContext,useCallback} from "react";

export const PageContext = createContext({});

export const PageContextProvider = ({children }) => {

  const headingInView = useCallback(
    (inView, headingText) => {
       if (inView) {
        console.log(true, headingText)
      } else {
         console.log(false, headingText)
      }
    },
    [],
  )

  return (
    <PageContext.Provider value={{ headingInView }}>
      {children}
    </PageContext.Provider>
  );
};
