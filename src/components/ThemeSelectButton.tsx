import { FaLaptop } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import useTheme from "../hooks/theme";
import { THEME_ICONS, ThemeType } from "../constants/theme";
import { useEffect, useRef, useState } from "react";
import { HiMiniChevronUpDown } from "react-icons/hi2";

type Props = {};

const ThemeSelectButton = (props: Props) => {
  const [menu, setMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // auto close menu
  useEffect(() => {
    const handleOutsideClick = (e: any) => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        setMenu(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, []);

  const { theme, setTheme } = useTheme();

  const handleThemeChange = (theme: ThemeType) => {
    setTheme(theme);
    setMenu(false);
  };

  return (
    <div className="relative ml-auto w-fit">
      <button
        onClick={(e) => setMenu((prev) => !prev)}
        className="border-theme-text/10 bg-theme-bg text-theme-text flex cursor-pointer items-center justify-start space-x-2 border px-3 py-1.5 md:px-5 md:py-2.5"
      >
        {THEME_ICONS[theme]}
        <span className="capitalize">{theme}</span>
        <HiMiniChevronUpDown />
      </button>
      <div
        ref={dropdownRef}
        className={`border-theme-text/10 absolute top-full z-50 mt-4 w-full flex-col gap-2 border p-2 ${menu ? "flex" : "hidden"}`}
      >
        {Object.keys(THEME_ICONS).map((t, i) => (
          <button
            key={i}
            onClick={(e) => handleThemeChange(t as ThemeType)}
            className={`${theme === (t as ThemeType) ? "text-theme-text/50" : "text-theme-text"} flex cursor-pointer items-center justify-start space-x-2`}
          >
            {THEME_ICONS[t as ThemeType]}
            <span className="capitalize">{t}</span>
          </button>
        ))}
        {/* <button
          onClick={(e) => console.log("light")}
          className="text-theme-text/50 flex items-center justify-start space-x-2"
        >
          <MdLightMode />
          <span>Light</span>
        </button>
        <button
          onClick={(e) => console.log("dark")}
          className="text-theme-text flex cursor-pointer items-center justify-start space-x-2"
        >
          <MdDarkMode />
          <span>Dark</span>
        </button>
        <button
          onClick={(e) => console.log("system")}
          className="text-theme-text flex cursor-pointer items-center justify-start space-x-2"
        >
          <FaLaptop />
          <span>System</span>
        </button> */}
      </div>
    </div>
  );
};

export default ThemeSelectButton;
