import React from "react";
import styles from "./Input.module.css";

interface InputProps {
  placeholder: string;
  type: string;
  isDisabled: boolean;
}
const Input = ({placeholder, type, isDisabled}: InputProps) => {
  return <input placeholder={placeholder} type={type} disabled={isDisabled} className={styles.input}/>;
};

export default Input;
