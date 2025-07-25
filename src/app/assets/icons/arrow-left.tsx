import * as React from 'react';

const SvgIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
      d="M26 55 2.749 31.301a4 4 0 0 1 0-5.602L26 2"
    ></path>
  </svg>
);

export default SvgIcon;
