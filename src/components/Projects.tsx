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
        {Array.from({ length: 5 }, (_, i) => (
          // <div
          //   key={i}
          //   className="relative h-36 w-full sm:w-[calc(50%-var(--gap))] lg:w-[calc(33%-var(--gap))]"
          // >
          //   <img
          //     src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          //     alt=""
          //     className="absolute inset-0 z-30 border border-red-500"
          //   />
          //   <div className="absolute inset-x-0 top-full bottom-0 z-40">
          //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          //     nulla, recusandae pariatur placeat facilis eligendi illum in.
          //     Nesciunt officiis laborum libero eum, nostrum commodi natus.
          //   </div>
          // </div>

          <div
            key={i}
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="flex min-h-[500px] w-full flex-col items-start justify-end overflow-hidden rounded-md bg-gray-500 transition-transform duration-200 ease-in-out hover:scale-105 sm:w-[calc(50%-var(--gap))] lg:w-[calc(33%-var(--gap))]"
          >
            {/* Content */}
            <div
              style={{
                background: `linear-gradient(
                  hsl(0 0% 0% / 0),
                  hsl(20 0% 0% / 0.3) 10%,
                  hsl(0 0% 0% / 1)
                  )`,
              }}
              className="flex flex-col gap-6 p-3 text-neutral-100"
            >
              {/* Name */}
              <h3 className="text-xl font-semibold">Awesome project</h3>
              {/* Description */}
              <div className="5 flex flex-col gap-1">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
                  aperiam totam quos nemo
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
                  aperiam totam quos nemo
                </p>
              </div>
              {/* Technologies */}
              <div className="flex flex-wrap gap-3">
                <div className="bg-black/40 px-3 py-1.5">Tailwind CSS</div>
                <div className="bg-black/40 px-3 py-1.5">React</div>
                <div className="bg-black/40 px-3 py-1.5">Node.js</div>
                <div className="bg-black/40 px-3 py-1.5">Express</div>
                <div className="bg-black/40 px-3 py-1.5">Prisma</div>
              </div>
              {/* Action buttons */}
              <div className="flex items-center justify-between px-3">
                <button className="bg-primary cursor-pointer rounded-sm px-3 py-1.5">
                  Github
                </button>
                <button className="border-primary cursor-pointer rounded-sm border px-3 py-1.5">
                  Demo
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* {PROJECTS.map((project, i) => (
          <div key={i} className="w-full md:w-1/2">a</div>
        ))} */}
      </div>
    </div>
  );

  // return (
  //   <div className="text-theme-text/70 my-36 text-center text-2xl font-light">
  //     <MdConstruction className="inline-block" />
  //     Under construction
  //     <MdConstruction className="inline-block" />
  //     <LuConstruction className="mx-auto mt-8" />
  //   </div>
  // );
};

export default Projects;
