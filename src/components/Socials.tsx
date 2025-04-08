import { FaArrowRight } from "react-icons/fa";
import { SOCIAL } from "../constants/info";

const Socials = () => {
  return (
    <div className="my-8 flex flex-col gap-8">
      <h1 className="text-primary h1">Socials</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:flex lg:flex-wrap">
        {/* socials */}
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
