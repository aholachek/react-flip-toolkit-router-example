import React from "react";

const Sun = props => (
  <svg viewBox="0 0 32 32"   {...props}>
    <path
      fill="#FFD878"
      d="M30 16l-4 4v6h-6l-4 4-4-4H6v-6l-4-4 4-4V6h6l4-4 4 4h6v6z"
    />
    <path fill="#FFE4A9" d="M23 16a7 7 0 1 0-14 0 7 7 0 1 0 14 0z" />
    <path
      fill="#4D5152"
      d="M16 3.414L19.586 7H25v5.414L28.586 16 25 19.586V25h-5.414L16 28.586 12.414 25H7v-5.414L3.414 16 7 12.414V7h5.414L16 3.414M16 2l-4 4H6v6l-4 4 4 4v6h6l4 4 4-4h6v-6l4-4-4-4V6h-6l-4-4z"
    />
    <path
      fill="#4D5152"
      d="M16 10c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6m0-1a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"
    />
  </svg>
);

export default Sun;
