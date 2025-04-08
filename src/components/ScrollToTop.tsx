import { useEffect, useRef } from "react";
import { FaChevronUp } from "react-icons/fa";

const ScrollToTop = () => {
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    window.onscroll = () => {
      if (btnRef.current !== null)
        if (
          document.body.scrollTop > 200 ||
          document.documentElement.scrollTop > 200
        ) {
          btnRef.current.style.opacity = "1";
          btnRef.current.style.pointerEvents = "auto";
        } else {
          btnRef.current.style.opacity = "0";
          btnRef.current.style.pointerEvents = "none";
        }
    };
  }, []);

  return (
    <button
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      ref={btnRef}
      className="bg-theme-text text-theme-base hover:bg-theme-text/80 pointer-events-none fixed right-5 bottom-5 cursor-pointer rounded-full p-4 opacity-0 transition-all duration-200"
    >
      <FaChevronUp />
    </button>
  );
};

export default ScrollToTop;
