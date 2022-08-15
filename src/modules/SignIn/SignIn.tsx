import { Link } from "react-router-dom";
import React from "react";
import styles from "./SignIn.module.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const SignUp = () => {
  return (
    <div className={styles.onlyColor}>
      <div className={styles.authorization}>
        <h1>АВТОРИЗАЦИЯ</h1>
        <div></div>
        <Input placeholder={"Электронная почта"} isDisabled={false} type={"email"} />
        <Input placeholder={"Пароль"} isDisabled={false} type={"password"} />
        <Link className={styles.link1} to="/SignIn">
          У вас нет аккаунта? Регистрация
        </Link>
        <Link className={styles.link2} to="/main">
          <Button isDisabled={false}>ВХОД</Button>
        </Link>
      </div>
    </div>
  );
};
export default SignUp;
