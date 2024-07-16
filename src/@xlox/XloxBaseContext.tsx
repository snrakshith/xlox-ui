import * as React from "react";
import * as core from "./ui.mjs";

type XloxBaseContextProviderProps = {
  children: React.ReactNode;
};

type XloxBaseContextType = {
  // theme: {
  //   core: any;
  // };
  theme: any;
};

const XloxBaseContext = React.createContext({} as XloxBaseContextType);
export const XloxBaseProvider = ({
  children,
}: XloxBaseContextProviderProps) => {
  const values = {
    theme: {
      ...core,
    },
  };

  return (
    <XloxBaseContext.Provider value={values}>
      {children}
    </XloxBaseContext.Provider>
  );
};

export const useTheme = () => {
  return React.useContext(XloxBaseContext);
};

/**
 * Step 1: See for a lox.config.js file in the root
 * Step 2: If the file exists then use those values to overide the default themes
 * Step 3: If no file found then use default config objects
 */
