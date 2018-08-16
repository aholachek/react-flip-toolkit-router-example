import React from "react";

const Leaf = props => (
  <svg viewBox="0 0 32 32"   {...props}>
    <path
      d="M25 18c0 9-9.5 9-9.5 9S6 27 6 18s9.5-16 9.5-16S25 9 25 18z"
      fill="#75ea9c"
    />
    <path d="M16 30.5a.5.5 0 0 1-1 0v-21a.5.5 0 0 1 1 0z" fill="#4d5152" />
    <g fill="none" stroke="#4d5152" strokeLinecap="round" strokeMiterlimit={10}>
      <path d="M15.5 14.5l3-3M15.5 20.5l5-5M15.5 17.5l-3-3M15.5 23.5l-5-5" />
    </g>
    <path
      d="M15.5 3.278C17.521 4.952 24 10.876 24 18c0 7.875-8.155 7.999-8.498 8C15.155 25.999 7 25.875 7 18c0-7.109 6.481-13.045 8.5-14.722M15.5 2S6 9 6 18s9.5 9 9.5 9 9.5 0 9.5-9-9.5-16-9.5-16z"
      fill="#4d5152"
    />
  </svg>
);

export default Leaf;
