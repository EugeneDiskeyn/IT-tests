import React from "react";
import Input from "../../../components/Input/Input";
import styles from "./Popup.module.css";
import Button from "../../../components/Button/Button";
import ExitIcon from "../../../images/icons/Exit.svg";
import getter from "../../../utils/localStorage/getter";

interface Props {
  inputType: string;
  indexOfUser: number;
  handleOnClick: () => void;
  handleValueChange: (event: any) => void;
  handleSubmit: () => void;
  initialState: string;
}

export const Popup = ({
  inputType,
  indexOfUser,
  handleOnClick,
  handleValueChange,
  handleSubmit,
  initialState,
}: Props) => {
  const users = getter();
  if (initialState === "") {
    initialState = users[indexOfUser][inputType];
  }
  return (
    <form className={styles.mask} onSubmit={handleSubmit}>
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
          pattern={inputType === "login" ? "[a-zA-Z0-9]{4,16}" : ""}
        />
        <div className={styles.buttons}>
          <Button onClick={handleOnClick}>Отменить</Button>
          <Button type={"submit"}>Сохранить</Button>
        </div>
      </div>
    </form>
  );
};
