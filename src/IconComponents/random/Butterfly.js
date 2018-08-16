import React from "react";

const Butterfly = props => (
  <svg viewBox="0 0 32 24"   {...props}>
    <path
      d="M12 0a1 1 0 1 0 0 2c.552 0 1 .896 1 2v10h2V4c0-2.209-1.343-4-3-4zm8 0c-1.657 0-3 1.791-3 4v10h2V4c0-1.104.448-2 1-2a1 1 0 0 0 0-2z"
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#999"
    />
    <path
      d="M32 7c0-4-1-5-5-5-6 0-10 6-10 6v10s1 6 5 6c.961 0 4-1 4-5 0-1.191-.807-2.201-1.928-3.038.308.022.618.038.928.038 4 0 7-5 7-9zM5 2C1 2 0 3 0 7s3 9 7 9c.31 0 .62-.016.928-.038C6.807 16.799 6 17.809 6 19c0 4 3.039 5 4 5 4 0 5-6 5-6V8S11 2 5 2z"
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#666"
    />
    <path
      d="M17 15s2 7 5 7c.961 0 2-1 2-3s-7-4-7-4zm-9 4c0 2 1.039 3 2 3 3 0 5-7 5-7s-7 2-7 4zM4 8c0 4 1 6 3 6 4 0 8-2 8-2v-2s-5-4-9-4C5 6 4 7 4 8zm22-2c-4 0-9 4-9 4v2s4 2 8 2c2 0 3-2 3-6 0-1-1-2-2-2z"
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#f83"
    />
    <ellipse cx={16} cy={14} rx={2} ry={9} fill="#666" />
  </svg>
);

export default Butterfly;
