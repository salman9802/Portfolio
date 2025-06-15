import Reveal from "./utils/Reveal";

import { PROJECTS } from "../constants/info";

const Projects = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="h1">
        <Reveal>
          <span className="text-primary leading-normal">Projects</span>
        </Reveal>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-[var(--gap)] [--gap:1.5rem]">
        {PROJECTS.map((project, i) => (
          <div
            key={i}
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="flex min-h-[500px] w-full flex-col items-start justify-end overflow-hidden rounded-lg bg-transparent transition-transform duration-200 ease-in-out hover:scale-105"
          >
            {/* sm:w-[calc(50%-var(--gap))] */}
            {/* Content */}
            <div
              style={{
                background: `linear-gradient(
                  hsl(0 0% 0% / 0),
                  hsl(20 0% 0% / 0.3) 10%,
                  hsl(0 0% 0% / 1)
                  )`,
              }}
              className="flex w-full flex-col gap-6 p-3 pt-8 text-neutral-100"
            >
              {/* Name */}
              <h3 className="text-xl font-semibold">
                <Reveal>{project.name}</Reveal>
              </h3>
              {/* Description */}
              <div className="5 flex flex-col gap-1">
                {project.description.map((desc, i) => (
                  <Reveal key={i}>
                    <p>{desc}</p>
                  </Reveal>
                ))}
              </div>
              {/* Technologies */}
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, i) => (
                  <Reveal key={i}>{tech}</Reveal>
                ))}
                {/* <div className="bg-black/40 px-3 py-1.5">React</div> */}
              </div>
              {/* Action buttons */}
              <div className="flex items-center justify-between px-3">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary cursor-pointer rounded-sm px-3 py-1.5"
                  >
                    Github
                  </a>
                )}
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-primary cursor-pointer rounded-sm border px-3 py-1.5"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
