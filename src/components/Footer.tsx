import { useEffect, useState } from "react";
import { YEAR } from "../constants/info";

const Footer = () => {
  const [copyrightYear, setCopyrightYear] = useState(
    `${new Date().getFullYear()}`,
  );

  useEffect(() => {
    if (YEAR !== copyrightYear)
      setCopyrightYear(`${YEAR} - ${new Date().getFullYear()}`);
  }, []);

  return (
    <div className="text-theme-text/70 my-4 text-center font-light">
      Copyright &copy; {copyrightYear} Salman Khan.
    </div>
  );
};

export default Footer;
