import { Link } from "react-router-dom";
import React from "react";
import styles from "./SignUp.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const SignUp = () => {
  return (
    <>
      <div className={styles.color}>
        <form className={styles.signingUp} action={"/"}>
          <h1> РЕГИСТРАЦИЯ </h1>
          <div className={styles.Line} />
          <Input
            placeholder={"Электронная почта"}
            isDisabled={false}
            type={"email"}
            isRequired={true}
            pattern={"[a-z0-9]+@[a-z]+.[a-z]{2,3}"}
          />
          <Input
            placeholder={"Логин"}
            isDisabled={false}
            type={"text"}
            isRequired={true}
            pattern={"[a-zA-Z0-9]{4,16}"}
          />
          <Input
            placeholder={"Пароль"}
            isDisabled={false}
            type={"password"}
            isRequired={true}
          />
          <Input
            placeholder={"Повторите пароль"}
            isDisabled={false}
            type={"password"}
            isRequired={true}
          />
          <Link className={styles.back} to={"/"}>
            У Вас уже есть аккаунт? Авторизация
          </Link>
          <Button type={"submit"} isDisabled={false}>
            РЕГИСТРАЦИЯ
          </Button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
