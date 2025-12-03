import React from "react";

const ReactTestingLibraryIcon = ({
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={className}>
      {/* <img src="https://testing-library.com/img/logo-large.png" /> */}
      <img src="testing-library-logo.png" />
    </div>
  );
};

export default ReactTestingLibraryIcon;
