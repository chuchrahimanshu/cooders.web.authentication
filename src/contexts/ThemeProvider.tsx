import React, { createContext, ReactNode, useState } from "react";
import { ThemeContextInterface } from "../types/contexts/context.types";

export const ThemeContext = createContext<ThemeContextInterface | undefined>(
  undefined
);
const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState("theme-default");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
