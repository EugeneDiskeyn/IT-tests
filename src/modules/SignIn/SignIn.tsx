import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import styles from "./SignIn.module.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import routes from "../../services/routes";
import getter from "../../utils/localStorage/getter";

const SignIn = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>("");
  const [mail, setMail] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const users = getter();
    const finder = users.find(
      (element: any) => element.gmail === mail && element.password === password
    );
    if (finder !== undefined) {
      sessionStorage.setItem("currentUser", finder.gmail);
      navigate(routes.catalog);
    }
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMail(event.target.value);
  };

  return (
    <div className={styles.container}>
      <form
        className={styles.authorization}
        autoComplete={"on"}
        onSubmit={handleSubmit}
      >
        <h1>АВТОРИЗАЦИЯ</h1>
        <Input
          placeholder={"Электронная почта"}
          type={"mail"}
          isRequired={true}
          value={mail}
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
        <Button type={"submit"}>ВХОД</Button>
      </form>
    </div>
  );
};
export default SignIn;
