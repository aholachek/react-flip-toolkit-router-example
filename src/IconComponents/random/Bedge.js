import React from "react";

const Bedge = props => (
  <svg viewBox="0 0 32 24"   {...props}>
    <path
      d="M30 2.001H2A2 2 0 0 0 0 4v18a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V4a2 2 0 0 0-2-1.999z"
      fill="#ccc"
    />
    <path
      d="M29 4H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"
      fill="#fff"
    />
    <path fill="#999" d="M10 0h12v4H10z" />
    <path
      d="M25 10h-6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zm-2 4h-4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z"
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#ccc"
    />
    <path
      d="M12 15v-.512c.604-.456 1-1.174 1-1.988v-2a2.5 2.5 0 1 0-5 0v2c0 .814.396 1.532 1 1.988V15c0 .5-3 .5-3 2v1h9v-1c0-1.5-3-1.5-3-2z"
      fill="#48a0dc"
    />
  </svg>
);

export default Bedge;
