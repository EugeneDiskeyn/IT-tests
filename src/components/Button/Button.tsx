import React from "react";

import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  isDisabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  children,
  isDisabled,
  type = "button",
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={styles.button}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
