import React from "react";
import { ThemeContext } from "../contexts/ThemeProvider";
import { ThemeContextInterface } from "../types/contexts.types";

export const useTheme = (): ThemeContextInterface => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
