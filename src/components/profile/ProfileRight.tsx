import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";

import { PROFILE } from "../../constants/info";

const ProfileRight = () => {
  const [copied, setCopied] = useState<boolean | null>(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(PROFILE.EMAIL)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      })
      .catch(() => {
        setCopied(null);
        setTimeout(() => setCopied(false), 3000);
      });
  };

  return (
    <div className="flex flex-col items-center gap-2 md:gap-4 lg:w-1/2 lg:gap-6">
      <img
        className="h-64 w-64 rounded-full object-cover object-center lg:h-96 lg:w-96"
        src="/L1.svg"
        alt="Profile Image"
      />
      <button
        onClick={handleCopy}
        className="border-theme-text/10 borderf flex items-center justify-center gap-2 px-3 py-1.5"
      >
        {copied === null ? (
          <span className="text-theme-text/70 text-sm">
            Couldn't copy email
          </span>
        ) : copied ? (
          <span className="text-theme-text/70 text-sm">
            Copied to clipboard
          </span>
        ) : (
          <span className="text-theme-text text-xl font-medium">
            {PROFILE.EMAIL}
          </span>
        )}
        {copied ? (
          <IoMdCheckmark />
        ) : (
          <FaRegCopy className="text-theme-text/40" />
        )}
      </button>
    </div>
  );
};

export default ProfileRight;
