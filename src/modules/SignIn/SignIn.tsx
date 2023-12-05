import { Link, useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";

import styles from "./SignIn.module.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import routes from "../../services/routes";
import getter from "../../utils/localStorage/getter";
import { GmailContext } from "../../App";

const SignIn = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>("");
  const [gmail, setGmail] = useState<string>("");

  const [gmailContext, setGmailContext] = useContext(GmailContext);
  const handleEnter = () => {
    const users = getter();
    const finder = users.find(
      (element: any) => element.gmail === gmail && element.password === password
    );
    if (finder !== undefined) {
      setGmailContext(finder.gmail);
      navigate(routes.catalog);
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
        <Link className={styles.link} to={routes.registration}>
          У вас нет аккаунта? Регистрация
        </Link>
        <Button onClick={handleEnter}>ВХОД</Button>
      </form>
    </div>
  );
};
export default SignIn;
