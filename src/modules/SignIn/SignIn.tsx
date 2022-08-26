import { Link } from "react-router-dom";
import React from "react";
import styles from "./SignIn.module.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const SignUp = () => {
  return (
      <div className={styles.onlyColor}>
        <form className={styles.authorization} action={"/main"} autoComplete={"on"}>
          <h1>АВТОРИЗАЦИЯ</h1>
          <div />
          <Input placeholder={"Электронная почта"} isDisabled={false} type={"email"} isRequired={true} />
          <Input placeholder={"Пароль"} isDisabled={false} type={"password"} isRequired={true} />
          <Link className={styles.link1} to="/SignIn">
            У вас нет аккаунта? Регистрация
          </Link>
          <Button type={"submit"} isDisabled={false}>ВХОД</Button>
        </form>
      </div>
  );
};
export default SignUp;