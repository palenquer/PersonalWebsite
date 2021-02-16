import * as React from "react";

function SvgDownArrow(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25px"
      height="25px"
      viewBox="0 0 612 612"
      {...props}
    >
      <path d="M604.501 134.782c-9.999-10.05-26.222-10.05-36.221 0L306.014 422.558 43.721 134.782c-9.999-10.05-26.223-10.05-36.222 0s-9.999 26.35 0 36.399l279.103 306.241c5.331 5.357 12.422 7.652 19.386 7.296 6.988.356 14.055-1.939 19.386-7.296l279.128-306.268c9.998-10.048 9.998-26.322-.001-36.372z" />
    </svg>
  );
}

export default SvgDownArrow;