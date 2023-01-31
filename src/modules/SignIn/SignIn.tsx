import { Link, useNavigate } from "react-router-dom";
import React from "react";
import styles from "./SignIn.module.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const SignUp = () => {
  const navigate = useNavigate();
  const handler = () => {
    navigate("/main");
  };
  return (
    <div className={styles.onlyColor}>
      <form className={styles.authorization} autoComplete={"on"}>
        <h1>АВТОРИЗАЦИЯ</h1>
        <div />
        <Input
          placeholder={"Электронная почта"}
          isDisabled={false}
          type={"email"}
          isRequired={true}
        />
        <Input
          placeholder={"Пароль"}
          isDisabled={false}
          type={"password"}
          isRequired={true}
        />
        <Link className={styles.link} to="/SignUp">
          У вас нет аккаунта? Регистрация
        </Link>
        <Button type={"submit"} isDisabled={false} onClick={handler}>
          ВХОД
        </Button>
      </form>
    </div>
  );
};
export default SignUp;
