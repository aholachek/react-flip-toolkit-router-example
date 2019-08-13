import React from "react";

const Eye = props => (
  <svg viewBox="0 0 32 26.001"   {...props}>
    <path
      d="M27 23.001c0-1.734 5-2.623 5-8 0-2.318-2.701-4-4-4-2.419 0-4-3-4-3V18s.983-1.999 2-1.999c1.11 0 2 .23 2 .999 0 1.195-4 3.131-4 6.001 0 1.907.971 3 3 3 2.309 0 5-1.001 5-1.001s-5-.24-5-1.999z"
      fill="#f06eaa"
    />
    <circle cx={13} cy={13} r={13} fill="#ccc" />
    <circle cx={13} cy={13} r={11} fill="#f1f1f1" />
    <circle cx={13} cy={13.001} r={7} fill="#48a0dc" />
    <circle cx={13} cy={13} r={4} fill="#4d4d4d" />
    <circle cx={16} cy={10} r={2} fill="#fff" />
  </svg>
);

export default Eye;
