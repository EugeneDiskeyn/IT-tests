import { Link } from "react-router-dom";
import React from "react";
import styles from "./SignIn.module.css";

const SignUp = () => {
  return (
    <div className={styles.onlyColor}>
      <div className={styles.authorization}>
        <h1>АВТОРИЗАЦИЯ</h1>
        <div> </div>
        <input placeholder={"Электронная почта"} className={styles.input1} />
        <input placeholder={"Пароль"} className={styles.input2} />
        <Link className={styles.link1} to="/SignIn">
          У вас нет аккаунта? Регистрация
        </Link>
        <Link className={styles.link2} to="/main">
          ВХОД
        </Link>
      </div>
    </div>
  );
};
export default SignUp;
