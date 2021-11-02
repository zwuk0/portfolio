import * as React from "react";

function SvgComponentMoon(props) {
  return (
    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M276.6 127.6a148.4 148.4 0 00-114.46 242.86A148.49 148.49 0 00326.47 387a150.66 150.66 0 01-15.94-16.51 148.38 148.38 0 019.79-236.29 148.18 148.18 0 00-43.72-6.6z"
        fill="#fff133"
      />
      <path
        d="M116.5 207a118 118 0 00-1.07 3.17M109.77 234.43a148.43 148.43 0 00221 150.11 148.44 148.44 0 010-257.08 148.46 148.46 0 00-204 56.62"
        fill="none"
        stroke="#02005c"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={20}
      />
    </svg>
  );
}

export default SvgComponentMoon;
