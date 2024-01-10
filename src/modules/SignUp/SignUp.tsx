import { Link, useNavigate } from "react-router-dom";
import React, { ChangeEvent, useReducer } from "react";

import styles from "./SignUp.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import adder from "../../utils/localStorage/adder";
import routes from "../../services/routes";

const SignUp = () => {
  interface Action {
    type: string;
    value: string;
  }
  interface State {
    gmail: string;
    login: string;
    password: string;
    repeat: string;
  }

  const navigate = useNavigate();

  const actionTypes = {
    SET_GMAIL: "SET_GMAIL",
    SET_LOGIN: "SET_LOGIN",
    SET_PASSWORD: "SET_PASSWORD",
    SET_REPEAT: "SET_REPEAT",
  };

  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case actionTypes.SET_GMAIL: {
        return {
          ...state,
          gmail: action.value,
        };
      }
      case actionTypes.SET_LOGIN: {
        return {
          ...state,
          login: action.value,
        };
      }
      case actionTypes.SET_PASSWORD: {
        return {
          ...state,
          password: action.value,
        };
      }
      case actionTypes.SET_REPEAT: {
        return {
          ...state,
          repeat: action.value,
        };
      }
      default: {
        return state;
      }
    }
  };

  const initialState: State = {
    gmail: "",
    login: "",
    password: "",
    repeat: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (
    type: string,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    dispatch({
      type,
      value: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (localStorage["user"] === undefined || localStorage["user"] === "") {
      localStorage.setItem("user", "[]");
    }
    if (state.password === state.repeat) {
      const testUsers = {
        gmail: state.gmail,
        login: state.login,
        password: state.password,
      };
      adder(testUsers);
      navigate(routes.authorisation);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.signingUp} onSubmit={handleSubmit}>
        <h2>РЕГИСТРАЦИЯ</h2>
        <Input
          placeholder={"Электронная почта"}
          type={"email"}
          isRequired={true}
          pattern={"[a-z0-9]+@[a-z]+.[a-z]{2,3}"}
          onChange={(event) => handleInputChange(actionTypes.SET_GMAIL, event)}
        />
        <Input
          placeholder={"Логин"}
          type={"text"}
          isRequired={true}
          pattern={"[a-zA-Z0-9]{4,16}"}
          onChange={(event) => handleInputChange(actionTypes.SET_LOGIN, event)}
        />
        <Input
          placeholder={"Пароль"}
          type={"password"}
          isRequired={true}
          onChange={(event) =>
            handleInputChange(actionTypes.SET_PASSWORD, event)
          }
        />
        <Input
          placeholder={"Повторите пароль"}
          type={"password"}
          isRequired={true}
          onChange={(event) => handleInputChange(actionTypes.SET_REPEAT, event)}
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
