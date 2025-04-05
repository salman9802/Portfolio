import React from "react";

import { FaLaptop } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export type ThemeType = "light" | "dark" | "system";
export type ThemeIconsType = {
  [k in ThemeType]: React.ReactNode;
};

export const THEME_ICONS: ThemeIconsType = {
  light: <MdLightMode />,
  dark: <MdDarkMode />,
  system: <FaLaptop />,
};
