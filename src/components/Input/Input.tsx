import React from "react";
import styles from "./Input.module.css";

import Edit from "../../images/icons/Edit.svg";

interface InputProps {
  className?: string;
  placeholder: string;
  type: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  pattern?: string;
  value?: string;
  onChange?: (event: any) => void;
  onClick?: (event: any) => void;
  isEditable?: boolean;
}

const Input = ({
  placeholder,
  type,
  isDisabled,
  isRequired,
  pattern,
  value,
  onChange,
  onClick,
  isEditable,
}: InputProps) => {
  return (
    <div className={styles.div}>
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
      {(() => {
        if (isEditable) {
          return (
            <img
              className={styles.img}
              src={Edit}
              alt={"Edit Icon"}
              onClick={onClick}
            />
          );
        }
      })()}
    </div>
  );
};

export default Input;
