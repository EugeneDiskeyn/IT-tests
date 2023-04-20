import { Link } from "react-router-dom";
import { useState } from "react";

import styles from "./SignUp.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Users from "../../utils/Users";

const SignUp = () => {
  const [gmail, setGmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");

  const handleGmailChange = (event: any) => {
    setGmail(event.target.value);
  };
  const handleLoginChange = (event: any) => {
    setLogin(event.target.value);
  };
  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };
  const handleRepeatChange = (event: any) => {
    setRepeat(event.target.value);
  };

  const userChecker = () => {
    Users.map((user) => {
      if (user.gmail === gmail || user.login === login) {
        console.log("You can't");
      } else if (password === repeat && password !== "") {
        console.log("welcome");
      }
    });
  };
  return (
    <div className={styles.container}>
      <form className={styles.signingUp} action={"/"}>
        <h1> РЕГИСТРАЦИЯ </h1>
        <div className={styles.Line} />
        <Input
          placeholder={"Электронная почта"}
          type={"email"}
          isRequired={true}
          pattern={"[a-z0-9]+@[a-z]+.[a-z]{2,3}"}
          onChange={handleGmailChange}
        />
        <Input
          placeholder={"Логин"}
          type={"text"}
          isRequired={true}
          pattern={"[a-zA-Z0-9]{4,16}"}
          onChange={handleLoginChange}
        />
        <Input
          placeholder={"Пароль"}
          type={"password"}
          isRequired={true}
          onChange={handlePasswordChange}
        />
        <Input
          placeholder={"Повторите пароль"}
          type={"password"}
          isRequired={true}
          onChange={handleRepeatChange}
        />
        <Link className={styles.back} to={"/"}>
          У Вас уже есть аккаунт? Авторизация
        </Link>
        <Button type={"submit"} onClick={userChecker}>
          РЕГИСТРАЦИЯ
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
