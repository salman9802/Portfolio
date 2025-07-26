import React, { useEffect, useState } from "react";
import { createContext } from "react";

import {
  saveTheme,
  THEME_STORAGE_KEY,
  ThemeType,
  validThemes,
} from "../constants/theme";

export type ThemeClsType = "light" | "dark";

type ThemeContextType = {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
  themecls: ThemeClsType | undefined;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

type Props = {
  children: React.ReactNode;
};
const ThemeProvider = (props: Props) => {
  const [theme, setTheme] = useState<ThemeType>((): ThemeType => {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) as ThemeType;
    if (storedTheme !== null && validThemes.includes(storedTheme))
      return storedTheme as ThemeType;
    else {
      saveTheme("system");
      return "system";
    }
  });
  const [themecls, setThemecls] = useState<ThemeClsType>();

  // keep themecls in sync with theme
  useEffect(() => {
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      setThemecls(mediaQuery.matches ? "dark" : "light");
    } else setThemecls(theme);
  }, [theme]);

  // keep theme and themecls in sync with system theme
  useEffect(() => {
    const handleThemeChange = (e: any) => {
      if (theme === "system") {
        if (e.matches) {
          setThemecls("dark");
          saveTheme("dark");
        } else {
          setThemecls("light");
          saveTheme("light");
        }
      }
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    mediaQuery.addEventListener("change", handleThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        themecls,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
