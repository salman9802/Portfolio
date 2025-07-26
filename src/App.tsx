import React from "react";

import Timeline from "./components/Timeline.tsx";
import Navbar from "./components/Navbar.tsx";
import Profile from "./components/Profile.tsx";
import Projects from "./components/Projects.tsx";
import Socials from "./components/Socials.tsx";
import useTheme from "./hooks/theme.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import Footer from "./components/Footer.tsx";
import TwinklingStarsBg from "./components/TwinklingStarsBg.tsx";

const lightThemeCursor = "url('black-cursor.svg') 1 1, auto";
const darkThemeCursor = "url('white-cursor.svg') 1 1, auto";

function App() {
  const { themecls } = useTheme();

  React.useEffect(() => {
    if (themecls == "light") {
      document.body.style.cursor = lightThemeCursor;
    } else {
      document.body.style.cursor = darkThemeCursor;
    }
  }, [themecls]);

  return (
    <div
      className={`${themecls} font-ibm-plex-mono bg-theme-base text-theme-text relative z-0 w-screen overflow-x-hidden px-4 md:px-8 lg:px-16`}
    >
      <TwinklingStarsBg theme={themecls} />
      <div className="relative -z-30 mx-auto w-11/12 xl:w-3/4">
        <Navbar />
        <Profile />
        <Timeline />
        <Projects />
        <Socials />
        <ScrollToTop />
        <Footer />
      </div>
    </div>
  );
}

export default App;
