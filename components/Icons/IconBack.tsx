import React from "react";

interface IconInterface {
  color?: string;
  width: string;
  height: string;
}

export default function IconBack({ color, width, height }: IconInterface) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 11 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.17485 22.9999C8.94004 23.0007 8.70804 22.9466 8.49589 22.8414C8.28374 22.7362 8.09684 22.5827 7.94891 22.3921L0.357546 12.5359C0.126375 12.2419 0 11.8732 0 11.4928C0 11.1123 0.126375 10.7436 0.357546 10.4496L8.2161 0.59343C8.48288 0.257963 8.86624 0.0469997 9.28184 0.00695109C9.69744 -0.0330975 10.1112 0.101049 10.4322 0.379879C10.7532 0.658708 10.955 1.05938 10.9933 1.49376C11.0317 1.92813 10.9033 2.36062 10.6365 2.69609L3.61099 11.501L10.4008 20.3059C10.593 20.547 10.7151 20.8406 10.7526 21.152C10.7901 21.4633 10.7415 21.7794 10.6126 22.0628C10.4836 22.3463 10.2797 22.5851 10.0249 22.7512C9.77007 22.9172 9.4751 23.0036 9.17485 22.9999Z"
        fill={color ? color : "#fff"}
      />
    </svg>
  );
}
