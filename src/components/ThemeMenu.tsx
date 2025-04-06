import { useEffect, useRef, useState } from "react";
import { HiMiniChevronUpDown } from "react-icons/hi2";

import useTheme from "../hooks/theme";
import { THEME_ICONS, ThemeType } from "../constants/theme";

const ThemeSelectButton = () => {
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
        onClick={(_) => setMenu((prev) => !prev)}
        className="border-theme-text/10 bg-theme-base text-theme-text focus:border-theme-text/50 flex cursor-pointer items-center justify-start space-x-2 border px-3 py-1.5 md:px-5 md:py-2.5"
      >
        {THEME_ICONS[theme]}
        <span className="capitalize">{theme}</span>
        <HiMiniChevronUpDown />
      </button>
      <div
        ref={dropdownRef}
        className={`border-theme-text/10 bg-theme-base absolute top-full z-50 mt-4 w-full flex-col gap-2 border p-2 ${menu ? "flex" : "hidden"}`}
      >
        {Object.keys(THEME_ICONS).map((t, i) => (
          <button
            key={i}
            onClick={(_) => handleThemeChange(t as ThemeType)}
            className={`${theme === (t as ThemeType) ? "text-theme-text/50" : "text-theme-text cursor-pointer"} flex items-center justify-start space-x-2`}
          >
            {THEME_ICONS[t as ThemeType]}
            <span className="capitalize">{t}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelectButton;
