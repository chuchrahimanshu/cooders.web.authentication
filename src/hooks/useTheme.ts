import React from "react";
import { ThemeContextInterface } from "../types/contexts/context.types";
import { ThemeContext } from "../contexts/ThemeProvider";

export const useTheme = (): ThemeContextInterface => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
