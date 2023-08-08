import { Link, useNavigate } from "react-router-dom";
import React, { useReducer } from "react";

import styles from "./SignUp.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import adder from "../../utils/localStorage/adder";
import routes from "../../services/routes";

const SignUp = () => {
  const initialState = { gmail: "", login: "", password: "", repeat: "" };
  const navigate = useNavigate();

  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "gmail": {
        return {
          ...state,
          gmail: action.gmail,
        };
      }
      case "login": {
        return {
          ...state,
          login: action.login,
        };
      }
      case "password": {
        return {
          ...state,
          password: action.password,
        };
      }
      case "repeat": {
        return {
          ...state,
          repeat: action.repeat,
        };
      }
      default: {
        return state;
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleGmailChange = (event: any) => {
    dispatch({
      type: "gmail",
      gmail: event.target.value,
    });
  };
  const handleLoginChange = (event: any) => {
    dispatch({
      type: "login",
      login: event.target.value,
    });
  };
  const handlePasswordChange = (event: any) => {
    dispatch({
      type: "password",
      password: event.target.value,
    });
  };
  const handleRepeatChange = (event: any) => {
    dispatch({
      type: "repeat",
      repeat: event.target.value,
    });
  };
  const userCheck = () => {
    let testUsers = {
      gmail: state.gmail,
      login: state.login,
      password: state.password,
    };
    adder(testUsers);
    navigate(routes.authorisation);
  };
  return (
    <div className={styles.container}>
      <form className={styles.signingUp} onSubmit={userCheck}>
        <h1> РЕГИСТРАЦИЯ </h1>
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
        <Link className={styles.back} to={routes.authorisation}>
          У Вас уже есть аккаунт? Авторизация
        </Link>
        <Button type={"submit"}>РЕГИСТРАЦИЯ</Button>
      </form>
    </div>
  );
};

export default SignUp;
