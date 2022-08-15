import React from "react";
import {inspect} from "util";
import styles from "./Button.module.css"

interface ButtonProps {
  children: React.ReactNode;
  isDisabled: boolean;
}
const Button = ({children, isDisabled}: ButtonProps) => {
  return <button className={styles.button} disabled={isDisabled}>{children}</button>;
};

export default Button;
