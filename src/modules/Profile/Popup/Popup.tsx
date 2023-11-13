import React, { useState } from "react";
import Input from "../../../components/Input/Input";
import styles from "./Popup.module.css";
import Button from "../../../components/Button/Button";

interface Props {
  onClick: (event: any) => void;
}

export const Popup = ({ onClick }: Props) => {
  return (
    <div className={styles.mask}>
      <div className={styles.popup}>
        <Input placeholder={"New name"} type={"text"} />
        <div className={styles.buttons}>
          <Button onClick={onClick}>Отменить</Button>
          <Button onClick={onClick}>Подтвердить</Button>
        </div>
      </div>
    </div>
  );
};
