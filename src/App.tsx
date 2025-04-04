import Experience from "./components/Experience.tsx";
import Navbar from "./components/Navbar.tsx";
import Profile from "./components/Profile.tsx";
import Projects from "./components/Projects.tsx";
import Socials from "./components/Socials.tsx";

function App() {
  return (
    <div className="light bg-theme-bg w-screen min-h-screen">
      <Navbar />
      <Profile />
      <Experience />
      <Projects />
      <Socials />
    </div>
  );
}

export default App;
