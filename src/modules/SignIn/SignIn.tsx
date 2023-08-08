import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import styles from "./SignIn.module.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Users from "../../utils/Users";

const SignIn = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [gmail, setGmail] = useState("");

  const handleEnter = () => {
    const finder = Users.find(
      (element) => element.gmail === gmail && element.password === password
    );

    if (finder !== undefined) {
      navigate("/catalog");
    }
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event: any) => {
    setGmail(event.target.value);
  };

  return (
    <div className={styles.container}>
      <form className={styles.authorization} autoComplete={"on"}>
        <h1>АВТОРИЗАЦИЯ</h1>
        <Input
          placeholder={"Электронная почта"}
          type={"email"}
          isRequired={true}
          value={gmail}
          onChange={handleEmailChange}
        />
        <Input
          placeholder={"Пароль"}
          type={"password"}
          isRequired={true}
          value={password}
          onChange={handlePasswordChange}
        />
        <Link className={styles.link} to="/reg">
          У вас нет аккаунта? Регистрация
        </Link>
        <Button type={"submit"} onClick={handleEnter}>
          ВХОД
        </Button>
      </form>
    </div>
  );
};
export default SignIn;
