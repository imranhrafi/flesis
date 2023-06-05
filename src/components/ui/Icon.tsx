import React, { ReactElement } from "react";

interface IconProps {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
  children: ReactElement;
  onClick?: () => void;
}

const Icon = ({
  className,
  width = 24,
  height = 24,
  fill = "none",
  children,
}: IconProps): ReactElement => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill={fill}
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
    >
      {children}
    </svg>
  );
};

export default Icon;
