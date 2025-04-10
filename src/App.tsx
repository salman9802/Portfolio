import Timeline from "./components/Timeline.tsx";
import Navbar from "./components/Navbar.tsx";
import Profile from "./components/Profile.tsx";
import Projects from "./components/Projects.tsx";
import Socials from "./components/Socials.tsx";
import useTheme from "./hooks/theme.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  const { themecls } = useTheme();

  return (
    <div
      className={`${themecls} font-ibm-plex-mono bg-theme-base text-theme-text w-screen overflow-x-hidden px-4 md:px-8 lg:px-16`}
    >
      <div className="mx-auto w-11/12 xl:w-3/4">
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
