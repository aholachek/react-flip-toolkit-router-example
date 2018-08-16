import React from "react";

const Mug = props => (
  <svg viewBox="0 0 28 32"   {...props}>
    <path
      d="M11.5 2c0-1.463-.5-2-.5-2s.02 2.317-2.031 3C6.918 3.682 4 5.244 4 7.999h2.484c0-1.03 1.068-2.485 2.484-2.999C10.58 4.415 11.5 3.105 11.5 2zm1.1 1s-.036 1.668-2 2.727C9.76 6.18 9 7.191 9 7.999h2c0-.586.6-1.202 1.2-1.817.716-.734.8-1.19.8-1.818C13 3.532 12.6 3 12.6 3z"
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#ccc"
    />
    <path
      d="M18 7.999H2a2 2 0 0 0-2 2v20A2 2 0 0 0 2 32h16a2 2 0 0 0 2-2.001v-20a2 2 0 0 0-2-2z"
      fill="#48a0dc"
    />
    <path
      d="M22 11h-2v3a1 1 0 0 1 1-1 4 4 0 0 1 4 4v4a4 4 0 0 1-4 4 1 1 0 0 1-1-1v3h2a6 6 0 0 0 6-6v-4a6 6 0 0 0-6-6z"
      fill="#387ba8"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#fc6"
      d="M14 15V7.999h-1V15l-2 2v5h5v-5z"
    />
  </svg>
);

export default Mug;
