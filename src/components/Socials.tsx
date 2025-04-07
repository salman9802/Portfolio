import { FaArrowRight } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { SOCIAL } from "../constants/info";

const Socials = () => {
  return (
    <div className="mx-auto my-8 flex w-11/12 flex-col gap-8 xl:w-1/2">
      <h1 className="text-primary h1">Socials</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:flex lg:flex-wrap">
        {/* email */}
        <a className="group/social border-theme-text/20 hover:bg-theme-text/10 flex cursor-pointer items-center justify-between space-x-2 border px-3 py-1.5 duration-200 md:px-5 md:py-2.5">
          <MdAlternateEmail className="size-5" />
          <span className="font-bold">Email</span>
          <FaArrowRight className="size-3 transition-transform duration-200 group-hover/social:translate-x-1/2" />
        </a>
        {/* other socials */}
        {SOCIAL.map((social, i) => (
          <a
            key={i}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/social border-theme-text/20 hover:bg-theme-text/10 flex cursor-pointer items-center justify-between space-x-2 border px-3 py-1.5 duration-200 md:px-5 md:py-2.5"
          >
            {social.icon}
            <span className="font-bold">{social.name}</span>
            <FaArrowRight className="size-3 transition-transform duration-200 group-hover/social:translate-x-1/2" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Socials;
