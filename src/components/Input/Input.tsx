import React from "react";
import styles from "./Input.module.css";

interface InputProps {
  placeholder: string;
  type: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  pattern?: string;
  value?: string;
  onChange?: (event: any) => void;
}

const Input = ({
  placeholder,
  type,
  isDisabled,
  isRequired,
  pattern,
  value,
  onChange,
}: InputProps) => {
  return (
    <input
      pattern={pattern}
      placeholder={placeholder}
      type={type}
      disabled={isDisabled}
      className={styles.input}
      required={isRequired}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
