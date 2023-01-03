import React from "react";

function Icon({fill}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="19"
      viewBox="0 0 20 19"
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
      >
        <g stroke={fill || "#222"} strokeWidth="1.5" transform="translate(-2 -2)">
          <g>
            <path
              d="M.571 6.685H4v10H.571c-.315 0-.571-.344-.571-.769V7.455c0-.425.256-.77.571-.77zM4 7.435l3.3-6.393a1.925 1.925 0 013.07-.478s0 0 0 0a3 3 0 01.88 2.121v3h5.25a1.5 1.5 0 011.489 1.686l-1.125 8a1.5 1.5 0 01-1.489 1.314H4"
              transform="translate(3 3.315)"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Icon;
