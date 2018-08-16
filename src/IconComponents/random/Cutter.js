import React from "react";

const Cutter = props => (
  <svg viewBox="0 0 30 32"   {...props}>
    <path fill="#d9d9d9" d="M19 3L0 22v10L24 8z" />
    <path
      d="M17.255 1.256C16.005 2.005 14.998 3.002 14 4L4 14v6L20 4l-2.745-2.744zM22.91 6.91L23 7 7 23h6l5-5c1-1 3-2 4-2 2.72 0 5.119-1.36 6.565-3.436L22.91 6.91z"
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#fc6"
    />
    <path
      d="M22 0c-1.987 0-3.489.502-4.745 1.255l11.31 11.31A7.959 7.959 0 0 0 30 8.001v-.002A8 8 0 0 0 22 0z"
      fill="#666"
    />
    <path fill="#999" d="M13 11l5-5 3 3-5 5z" />
  </svg>
);

export default Cutter;
