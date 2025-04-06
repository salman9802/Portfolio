import { PROFILE } from "../../constants/info";

const Info = () => {
  return (
    <div className="flex flex-col gap-1 text-center md:gap-2 lg:w-1/2 lg:gap-4 lg:text-left">
      <h1 className="h1">
        Hello, I'm <span className="text-primary">{PROFILE.NAME}</span>
      </h1>
      <h2 className="custom-gradient mx-auto w-fit text-xl md:text-2xl lg:mx-0 lg:text-3xl">
        {PROFILE.PROFESSIONS[0]}
      </h2>
      {PROFILE.DESCRIPTION.map((prof, i) => (
        <p key={i} className="mt-1 text-sm md:mt-1.5 lg:mt-4 lg:text-base">
          {prof}
        </p>
      ))}
    </div>
  );
};

export default Info;
