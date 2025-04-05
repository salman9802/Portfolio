import React, { useEffect, useState } from "react";
import { createContext } from "react";

import { ThemeType } from "../constants/theme";

type ThemeClsType = "light" | "dark";

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
  const [theme, setTheme] = useState<ThemeType>("system");
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
        e.matches ? setThemecls("dark") : setThemecls("light");
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
