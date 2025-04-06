import Timeline from "./components/Timeline.tsx";
import Navbar from "./components/Navbar.tsx";
import Profile from "./components/Profile.tsx";
import Projects from "./components/Projects.tsx";
import Socials from "./components/Socials.tsx";
import useTheme from "./hooks/theme.tsx";

function App() {
  const { themecls } = useTheme();

  return (
    <div
      className={`${themecls} font-ibm-plex-mono bg-theme-base text-theme-text min-h-screen w-screen px-4 md:px-8 lg:px-16`}
    >
      <Navbar />
      <Profile />
      <Timeline />
      <Projects />
      <Socials />
    </div>
  );
}

export default App;
