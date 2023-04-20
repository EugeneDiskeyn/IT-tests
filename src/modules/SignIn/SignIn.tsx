import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import styles from "./SignIn.module.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Users from "../../utils/Users";

const SignIn = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function handleEnter(event: any) {
    Users.map((user) => {
      if (user.gmail === email && user.password === password) {
        navigate("/main");
      }
    });
  }

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  return (
    <div className={styles.container}>
      <form className={styles.authorization} autoComplete={"on"}>
        <h1>АВТОРИЗАЦИЯ</h1>
        <div />
        <Input
          placeholder={"Электронная почта"}
          type={"email"}
          isRequired={true}
          value={email}
          onChange={handleEmailChange}
        />
        <Input
          placeholder={"Пароль"}
          type={"password"}
          isRequired={true}
          value={password}
          onChange={handlePasswordChange}
        />
        <Link className={styles.link} to="/SignUp">
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
