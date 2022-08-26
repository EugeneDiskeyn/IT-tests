import React from "react";
import styles from "./Input.module.css";

interface InputProps {
  placeholder: string;
  type: string;
  isDisabled: boolean;
  isRequired: boolean;
  pattern?: string;
}
const Input = ({placeholder, type, isDisabled, isRequired, pattern}: InputProps) => {
  return <input pattern={pattern} placeholder={placeholder} type={type} disabled={isDisabled} className={styles.input} required={isRequired}/>;
};

export default Input;