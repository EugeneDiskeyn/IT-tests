import React from "react";
import styles from "./Button.module.css"

interface ButtonProps {
  children: React.ReactNode;
  isDisabled: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}
const Button = ({children, isDisabled, type}: ButtonProps) => {
  return <button type={type} className={styles.button} disabled={isDisabled}>{children}</button>;
};

export default Button;