import React, { ChangeEvent } from "react";
import styles from "./Input.module.css";

import Edit from "../../images/icons/Edit.svg";

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
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
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
