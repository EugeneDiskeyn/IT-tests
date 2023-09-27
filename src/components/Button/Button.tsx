import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  isDisabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: (event: any) => void;
}
const Button = ({ children, isDisabled, type, onClick }: ButtonProps) => {
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
