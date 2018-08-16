import React from "react";

const ThunderboltDisplay = props => (
  <svg viewBox="0 0 32 30"   {...props}>
    <path
      d="M30 0H2a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"
      fill="#4d4d4d"
    />
    <path
      d="M29 2H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"
      fill="gray"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#b3b3b3"
      d="M20 22h-8l-1 6h10z"
    />
    <path
      d="M22 26H10a2 2 0 0 0-2 2h16a2 2 0 0 0-2-2z"
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#ccc"
    />
  </svg>
);

export default ThunderboltDisplay;
