import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type ButtonColor =
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error";
type ButtonVariant =
  | "default"
  | "ghost"
  | "link"
  | "outline"
  | "active"
  | "disabled"
  | "glass"
  | "loading"
  | "no-animation";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  fontSize?: string;
  fontWeight?: string;
}

const Button = ({
  variant = "default",
  color = "primary",
  fontSize = "text-xs",
  fontWeight = "font-normal",
  className,
  ...rest
}: ButtonProps) => {
  const buttonClasses = clsx(
    "btn",
    `btn-${variant}`,
    `btn-${color}`,

    fontSize,
    fontWeight,
    className
  );

  return <button className={buttonClasses} {...rest} />;
};

export default Button;
