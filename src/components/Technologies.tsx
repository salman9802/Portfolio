import { TECHNOLOGIES } from "../constants/info";
import Reveal from "./utils/Reveal";

const Technologies = () => {
  return (
    <div className="flex min-h-screen flex-col gap-12">
      <Reveal>
        <h1 className="h1 text-primary h-[1.25lh]">Technologies I use</h1>
      </Reveal>
      <div className="flex flex-col gap-12">
        {/* Languages */}
        <div className="grid grid-cols-1 items-start gap-3 md:grid-cols-2">
          <h2 className="text-accent border-accent w-fit border-b-4 pb-2 text-3xl font-bold lg:text-4xl">
            <Reveal color="accent">Languages</Reveal>
          </h2>
          <Reveal>
            <div className="flex flex-wrap gap-3">
              {TECHNOLOGIES.languages.map((v) => (
                <div className="bg-theme-text/5 flex items-center justify-center gap-3 px-3 py-1.5 text-xl">
                  {v.icon}
                  <span className="text-xl">{v.name}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Frontend */}
        <div className="grid grid-cols-1 items-start gap-3 md:grid-cols-2">
          <h2 className="text-accent border-accent w-fit border-b-4 pb-2 text-3xl font-bold lg:text-4xl">
            <Reveal color="accent">Frontend</Reveal>
          </h2>
          <Reveal>
            <div className="flex flex-wrap gap-3">
              {TECHNOLOGIES.frontend.map((v) => (
                <div className="bg-theme-text/5 flex items-center justify-center gap-3 px-3 py-1.5 text-xl">
                  {v.icon}
                  <span className="text-xl">{v.name}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Backend */}
        <div className="grid grid-cols-1 items-start gap-3 md:grid-cols-2">
          <h2 className="text-accent border-accent w-fit border-b-4 pb-2 text-3xl font-bold lg:text-4xl">
            <Reveal color="accent">Backend</Reveal>
          </h2>
          <Reveal>
            <div className="flex flex-wrap gap-3">
              {TECHNOLOGIES.backend.map((v) => (
                <div className="bg-theme-text/5 flex items-center justify-center gap-3 px-3 py-1.5 text-xl">
                  {v.icon}
                  <span className="text-xl">{v.name}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Databases */}
        <div className="grid grid-cols-1 items-start gap-3 md:grid-cols-2">
          <h2 className="text-accent border-accent w-fit border-b-4 pb-2 text-3xl font-bold lg:text-4xl">
            <Reveal color="accent">Databases</Reveal>
          </h2>
          <Reveal>
            <div className="flex flex-wrap gap-3">
              {TECHNOLOGIES.databases.map((v) => (
                <div className="bg-theme-text/5 flex items-center justify-center gap-3 px-3 py-1.5 text-xl">
                  {v.icon}
                  <span className="text-xl">{v.name}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Tools */}
        <div className="grid grid-cols-1 items-start gap-3 md:grid-cols-2">
          <h2 className="text-accent border-accent w-fit border-b-4 pb-2 text-3xl font-bold lg:text-4xl">
            <Reveal color="accent">Tools</Reveal>
          </h2>
          <Reveal>
            <div className="flex flex-wrap gap-3">
              {TECHNOLOGIES.tools.map((v) => (
                <div className="bg-theme-text/5 flex items-center justify-center gap-3 px-3 py-1.5 text-xl">
                  {v.icon}
                  <span className="text-xl">{v.name}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
