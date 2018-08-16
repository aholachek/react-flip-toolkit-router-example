import React from "react";

const HandWatch = props => (
  <svg viewBox="0 0 32 32"   {...props}>
    <path
      d="M20 3c-1 0-2 2-4 2L5 16c0 2-2 3-2 4s8 9 9 9 2-2 4-2l11-11c0-2 2-3 2-4s-8-9-9-9z"
      fill="#ccc"
    />
    <path
      d="M26 0c-1 0-1 0-2 1L1 24c-1 1-1 1-1 2s5 6 6 6 1 0 2-1L31 8c1-1.001 1-1.001 1-2 0-1.001-5-6-6-6z"
      fill="#a67c52"
    />
    <path
      d="M27 16c0-6.075-4.925-11-11-11S5 9.925 5 16s4.925 11 11 11c2.386 0 4.588-.768 6.391-2.059C23.156 25.582 23.757 26 24 26c.5 0 2-1.5 2-2 0-.243-.418-.844-1.058-1.609A10.943 10.943 0 0 0 27 16z"
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#ccc"
    />
    <circle cx={16} cy={16} r={9} fill="#fff" />
    <circle cx={16} cy={16} r={2} fill="#ccc" />
    <path
      d="M23 15h-6.53l-2.704-2.704a1.04 1.04 0 0 0-1.47 1.469l2.938 2.939c.214.214.497.308.776.296H23a1 1 0 0 0 0-2z"
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#999"
    />
  </svg>
);

export default HandWatch;
