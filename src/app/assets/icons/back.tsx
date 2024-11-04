import * as React from "react";

const BackArrow: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="57"
    fill="none"
    viewBox="0 0 28 57"
    {...props}
  >
    <path
      stroke="#fff"
      strokeWidth="3"
      d="m2 2 23.252 23.699a4 4 0 0 1 0 5.602L2 55"
    ></path>
  </svg>
);

export default BackArrow;
