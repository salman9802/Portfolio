import { LuConstruction } from "react-icons/lu";
import { MdConstruction } from "react-icons/md";

const Projects = () => {
  return (
    <div className="text-theme-text/70 my-36 text-center text-2xl font-light">
      <MdConstruction className="inline-block" />
      Under construction
      <MdConstruction className="inline-block" />
      <LuConstruction className="mx-auto mt-8" />
    </div>
  );
};

export default Projects;
