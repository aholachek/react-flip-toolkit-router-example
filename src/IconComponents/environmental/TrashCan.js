import React from "react";

const TrashCan = props => (
  <svg viewBox="0 0 32 32"   {...props}>
    <path d="M6 8h19v2H6z" fill="#aaa" />
    <path
      d="M26 10l-1.5 18.08c-.05.52-.48.92-1 .92h-16c-.52 0-.95-.4-1-.92L5 10z"
      fill="#bfbfbf"
    />
    <g fill="#4d5152">
      <path d="M10 13h1v13h-1zM15 13h1v13h-1zM20 13h1v13h-1z" />
      <path d="M5 10l1.5 18.08c.05.52.48.92 1 .92h16c.52 0 .95-.4 1-.92L26 10zm18.5 18h-16L6.09 11h18.82z" />
      <path d="M10 13h1v13h-1zM15 13h1v13h-1zM20 13h1v13h-1zM24.5 7H21V5.5c0-.83-.67-1.5-1.5-1.5h-8c-.83 0-1.5.67-1.5 1.5V7H6.5C5.4 7 5 7.9 5 8.5V10h1V8.5c.01-.24.11-.5.5-.5h18c.39 0 .49.26.5.5V10h1V8.5c0-.6-.4-1.5-1.5-1.5zM20 7h-9V5.5c0-.28.22-.5.5-.5h8c.28 0 .5.22.5.5z" />
    </g>
  </svg>
);

export default TrashCan;
