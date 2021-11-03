import * as React from "react";

function SvgGmail(props) {
  return (
    <svg
      width={35}
      height={35}
      viewBox="0 0 55 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.5 55C42.688 55 55 42.688 55 27.5S42.688 0 27.5 0 0 12.312 0 27.5 12.312 55 27.5 55zm25.636-27.5c0 14.158-11.478 25.636-25.636 25.636S1.864 41.658 1.864 27.5 13.342 1.864 27.5 1.864 53.136 13.342 53.136 27.5zm-11.42-13.517H13.75a3.506 3.506 0 00-3.496 3.496v20.974a3.506 3.506 0 003.496 3.496h27.966a3.507 3.507 0 003.496-3.496V17.48a3.507 3.507 0 00-3.496-3.496zm0 24.47H38.22v-15.38l-10.487 6.641-10.487-6.642v15.381H13.75V17.48h2.098l11.885 7.341 11.885-7.341h2.098v20.974z"
        fill="#E23434"
        {...props}
      />
    </svg>
  );
}

export default SvgGmail;