import React from "react";

import { FaLaptop } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export const validThemes = ["light", "dark", "system"] as const;
export type ThemeType = (typeof validThemes)[number];
// export type ThemeType = "light" | "dark" | "system";

export type ThemeIconsType = {
  [k in ThemeType]: React.ReactNode;
};

export const THEME_ICONS: ThemeIconsType = {
  light: <MdLightMode />,
  dark: <MdDarkMode />,
  system: <FaLaptop />,
};

export const THEME_STORAGE_KEY = "salportth";

export const saveTheme = (theme: ThemeType) =>
  localStorage.setItem(THEME_STORAGE_KEY, theme);
