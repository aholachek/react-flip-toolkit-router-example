import React from "react";

const Hdd = props => (
  <svg viewBox="0 0 24 32"   {...props}>
    <path
      d="M22 0H2a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"
      fill="#4d4d4d"
    />
    <circle cx={12} cy={14} r={10} fill="#ed7161" />
    <circle cx={12} cy={14} r={2} fill="#4d4d4d" />
    <path
      d="M3 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm18 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 24a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#ccc"
    />
    <path
      d="M11 17.006a.984.984 0 0 0-.786.408L3 24.769s-1 .496-1 2.239a2.994 2.994 0 0 0 3 2.986c1.397 0 2.374-1.019 2.895-2.243l3.892-9.163a.97.97 0 0 0 .213-.587.997.997 0 0 0-1-.995z"
      fill="#f1f1f1"
    />
  </svg>
);

export default Hdd;
