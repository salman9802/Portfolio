import { PROFILE, SOCIAL } from "../../constants/info";

const Info = () => {
  return (
    <div className="flex flex-col gap-1 text-center md:gap-2 lg:w-1/2 lg:gap-4 lg:text-left">
      <h1 className="h1">
        Hello, I'm <span className="text-primary">{PROFILE.NAME}</span>
      </h1>
      <h2 className="custom-gradient mx-auto w-fit text-xl md:text-2xl lg:mx-0 lg:text-3xl">
        {PROFILE.PROFESSIONS[0]}
      </h2>
      <div className="flex flex-col gap-1">
        {PROFILE.DESCRIPTION.map((prof, i) => (
          <p key={i} className="mt-1 text-sm md:mt-1.5 lg:mt-4 lg:text-base">
            {prof}
          </p>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-center gap-4 lg:self-start">
        <button className="bg-primary hover:outline-primary cursor-pointer rounded-sm px-3 py-1.5 hover:bg-transparent hover:outline md:px-5 md:py-2.5">
          Download Resume
        </button>
        <a
          href={SOCIAL.filter((s) => s.name === "Github")[0].url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent border-accent hover:bg-accent hover:text-theme-text rounded-sm border px-3 py-1.5 md:px-5 md:py-2.5"
        >
          View Github
        </a>
      </div>
    </div>
  );
};

export default Info;
