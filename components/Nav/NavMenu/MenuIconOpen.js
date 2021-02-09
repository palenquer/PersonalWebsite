import * as React from "react";

function SvgMenu(props) {      
  return (
    <svg
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="25px"
      height="25px"
      {...props}
    >
      <path d="M0 4v4h48V4zm0 18v4h48v-4zm0 18v4h48v-4zm0 0" fill="#fff" />
    </svg>
  );
}

export default SvgMenu;