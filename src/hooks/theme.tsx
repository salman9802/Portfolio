import { useContext } from "react";

import { ThemeContext } from "../context/theme";

const useTheme = () => {
  const themeContextValue = useContext(ThemeContext);
  if (themeContextValue === undefined) {
    throw new Error("useTheme cannot be used outside ThemeProvider");
  }
  return themeContextValue;
};

export default useTheme;
