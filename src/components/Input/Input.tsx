import React, { ChangeEvent } from "react";

import styles from "./Input.module.css";

interface InputProps {
  name?: string;
  className?: string;
  placeholder: string;
  type: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  pattern?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
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
