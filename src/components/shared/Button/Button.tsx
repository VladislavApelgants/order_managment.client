import React, { FC } from "react";
import { classnames } from "../../../utils/classnames.ts";

type ButtonTypes = {
  children?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  handler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  aria?: string;
  disabled?: boolean;
};

export const Button: FC<ButtonTypes> = ({
  children,
  type = "button",
  className,
  handler,
  aria,
  disabled,
}): React.JSX.Element => {
  return (
    <button
      onClick={handler}
      type={type}
      aria-label={aria}
      className={classnames(className)}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
