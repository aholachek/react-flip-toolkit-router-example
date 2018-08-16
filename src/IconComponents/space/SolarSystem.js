import React from "react";

const SolarSystem = props => (
  <svg viewBox="0 0 62 64"   {...props}>
    <mask id="a" fill="#fff">
      <path d="M0 14c0 7.732 6.268 14 14 14s14-6.268 14-14c0-.42-.027-.833-.063-1.243-.281.15-.596.243-.937.243-.017 0-.034-.005-.051-.005.026.333.051.666.051 1.005 0 7.168-5.832 13-13 13S1 21.168 1 14 6.832 1 14 1c5.484 0 10.176 3.419 12.082 8.233.276-.144.585-.233.918-.233.023 0 .044.006.067.007C25.054 3.744 19.97 0 14 0 6.268 0 0 6.268 0 14z" />
    </mask>
    <mask id="b" fill="#fff">
      <path d="M20.826.032C20.931.337 21 .659 21 1c0 .017-.005.034-.005.051C21.33 1.035 21.661 1 22 1c11.579 0 21 9.421 21 21s-9.421 21-21 21S1 33.579 1 22C1 12.792 6.965 4.968 15.228 2.142a3.01 3.01 0 0 1-.214-1.003C6.29 4.06 0 12.293 0 22c0 12.15 9.85 22 22 22s22-9.85 22-22S34.15 0 22 0c-.394 0-.785.011-1.174.032z" />
    </mask>
    <mask id="c" fill="#fff">
      <path d="M0 6a6 6 0 1 0 12 0A6 6 0 0 0 0 6zm1 0c0-2.757 2.243-5 5-5s5 2.243 5 5-2.243 5-5 5-5-2.243-5-5z" />
    </mask>
    <mask id="d" fill="#fff">
      <path d="M0 2a2 2 0 1 0 3.999.001A2 2 0 0 0 0 2zm1 0c0-.551.449-1 1-1s1 .449 1 1-.449 1-1 1-1-.449-1-1z" />
    </mask>
    <mask id="e" fill="#fff">
      <path d="M0 3a3 3 0 1 0 6 0 3 3 0 0 0-6 0zm1 0c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2z" />
    </mask>
    <mask id="f" fill="#fff">
      <path d="M0 4a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm1 0c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3z" />
    </mask>
    <mask id="g" fill="#fff">
      <path d="M0 1a1 1 0 1 0 2 0 1 1 0 0 0-2 0z" />
    </mask>
    <mask id="h" fill="#fff">
      <path d="M0 1a1 1 0 1 0 2 0 1 1 0 0 0-2 0z" />
    </mask>
    <mask id="i" fill="#fff">
      <path d="M0 1a1 1 0 1 0 2 0 1 1 0 0 0-2 0z" />
    </mask>
    <mask id="j" fill="#fff">
      <path d="M0 1a1 1 0 1 0 2 0 1 1 0 0 0-2 0z" />
    </mask>
    <g fill="none" fillRule="evenodd">
      <path
        d="M-5 33h38V-5H-5z"
        fill="#2b7bbf"
        mask="url(#a)"
        transform="translate(17 18)"
      />
      <path
        d="M-5 49h54V-5H-5z"
        fill="#2b7bbf"
        mask="url(#b)"
        transform="translate(9 10)"
      />
      <g fill="#f0b32f">
        <path
          d="M-5 17h22V-5H-5z"
          mask="url(#c)"
          transform="translate(25 26)"
        />
        <path d="M-5 9H9V-5H-5z" mask="url(#d)" transform="translate(42 27)" />
        <path d="M-5 11h16V-5H-5z" mask="url(#e)" transform="translate(24 8)" />
        <path
          d="M-5 13h18V-5H-5z"
          mask="url(#f)"
          transform="translate(16 56)"
        />
        <path d="M-5 7H7V-5H-5z" mask="url(#g)" transform="translate(54 7)" />
        <path d="M-5 7H7V-5H-5z" mask="url(#h)" transform="translate(8 19)" />
        <path d="M-5 7H7V-5H-5z" mask="url(#i)" transform="translate(53 55)" />
        <path d="M-5 7H7V-5H-5z" mask="url(#j)" transform="translate(11)" />
      </g>
      <path
        d="M31 1C13.879 1 0 14.879 0 32c0 11.714 6.499 21.907 16.086 27.179.071-.342.199-.659.352-.963C7.239 53.086 1 43.26 1 32 1 15.458 14.458 2 31 2s30 13.458 30 30-13.458 30-30 30a29.93 29.93 0 0 1-7.18-.875 3.953 3.953 0 0 1-.408.936c2.429.611 4.97.939 7.588.939 17.121 0 31-13.879 31-31S48.121 1 31 1"
        fill="#2b7abf"
      />
    </g>
  </svg>
);

export default SolarSystem;
