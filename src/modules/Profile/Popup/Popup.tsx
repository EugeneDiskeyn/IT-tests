import React, { useState } from "react";
import Input from "../../../components/Input/Input";
import styles from "./Popup.module.css";
import Button from "../../../components/Button/Button";
import getter from "../../../utils/localStorage/getter";
import ExitIcon from "../../../images/icons/Exit.svg";

interface Props {
  inputType: string;
  handleOnClick: () => void;
  handleValueChange: (event: any) => void;
  handleSubmit: () => void;
  initialState: string;
}

export const Popup = ({
  inputType,
  handleOnClick,
  handleValueChange,
  handleSubmit,
  initialState,
}: Props) => {
  return (
    <div className={styles.mask}>
      <div className={styles.popup}>
        <div className={styles.redactType}>
          <h2>Редактировать {inputType === "login" ? "логин" : "пароль"}</h2>
          <img onClick={handleOnClick} src={ExitIcon} alt={"exit icon"} />
        </div>
        <Input
          placeholder={`New ${inputType}`}
          type={"text"}
          onChange={handleValueChange}
          isRequired
          value={initialState}
        />
        <div className={styles.buttons}>
          <Button onClick={handleOnClick}>Отменить</Button>
          <Button onClick={handleSubmit}>Сохранить</Button>
        </div>
      </div>
    </div>
  );
};
