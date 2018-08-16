import React from "react";

const RibbonBow = props => (
  <svg viewBox="0 0 32 32"   {...props}>
    <path
      d="M3 28h4l2 4 7-18-3-2L3 28zm16-16l-3 2 7 18 2-4h4L19 12z"
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#ed7161"
    />
    <path
      d="M32 4c0-2.209-2-4-5-4-4 0-11 8-11 8S9 0 5 0C2 0 0 1.791 0 4c0 0 1 3.154 1 6 0 3.14-1 6-1 6 0 2.209 2 3 5 3 4 0 11-5 11-5s7 5 11 5c3 0 5-.791 5-3 0 0-1-2.86-1-6 0-2.846 1-6 1-6z"
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#ed7161"
    />
    <path
      d="M3 15c0 1.841.75 2 3.375 2C9.875 17 16 12.833 16 12.833S11.5 12 8 12c-2.625 0-5 1.159-5 3zm21-3c-3.5 0-8 .833-8 .833S22.125 17 25.625 17C28.25 17 29 16.841 29 15s-2.375-3-5-3z"
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#ba594c"
    />
    <path
      d="M17 6h-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"
      fill="#ba594c"
    />
  </svg>
);

export default RibbonBow;
