import React, { ChangeEvent, useReducer } from "react";

import NavBar from "../NavBar/NavBar";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import styles from "./FeedBack.module.css";
import assistant from "../../images/logos/virtual-assistant.svg";

interface State {
  login: string;
  email: string;
  phone: string;
  option: string;
  textArea: string;
}
interface Action {
  type: string;
  value: string;
}

const FeedBack = () => {
  const actionTypes = {
    SET_LOGIN: "SET_LOGIN",
    SET_EMAIL: "SET_EMAIL",
    SET_PHONE: "SET_PHONE",
    SET_OPTION: "SET_OPTION",
    SET_TEXTAREA: "SET_TEXTAREA",
  };

  const initialState = {
    login: "",
    email: "",
    phone: "",
    option: "",
    textArea: "",
  };

  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case actionTypes.SET_LOGIN:
        return {
          ...state,
          login: action.value,
        };
      case actionTypes.SET_EMAIL:
        return {
          ...state,
          email: action.value,
        };
      case actionTypes.SET_OPTION:
        return {
          ...state,
          option: action.value,
        };
      case actionTypes.SET_PHONE:
        return {
          ...state,
          phone: action.value,
        };
      case actionTypes.SET_TEXTAREA:
        return {
          ...state,
          textArea: action.value,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (actionType: string, event: any) => {
    dispatch({ type: actionType, value: event.target.value });
  };

  const handleSubmit = () => {
    console.log(
      state.login,
      state.email,
      state.phone,
      state.option,
      state.textArea
    );
  };

  return (
    <>
      <NavBar />
      <div className={styles.form_img}>
        <form className={styles.feedback} onSubmit={handleSubmit}>
          <h2>Мы на связи</h2>
          <Input
            placeholder={"Логин"}
            type={"text"}
            isRequired={true}
            onChange={(event) => handleChange(actionTypes.SET_LOGIN, event)}
          />
          <Input
            placeholder={"E-mail"}
            type={"text"}
            isRequired={true}
            onChange={(event) => handleChange(actionTypes.SET_EMAIL, event)}
          />
          <Input
            placeholder={"Телефон"}
            type={"text"}
            pattern="\+?[0-9\s\-\(\)]+"
            isRequired={true}
            onChange={(event) => handleChange(actionTypes.SET_PHONE, event)}
          />
          <select
            className={styles.sel}
            onChange={(event: ChangeEvent<HTMLSelectElement>) =>
              handleChange(actionTypes.SET_OPTION, event)
            }
          >
            <option>Option1</option>
            <option>Option2</option>
            <option>Option3</option>
            <option>Option4</option>
          </select>
          <textarea
            className={styles.feedarea}
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
              handleChange(actionTypes.SET_TEXTAREA, event)
            }
          />
          <Button type={"submit"}>Отправить</Button>
        </form>
        <img src={assistant} alt={"virtual assistant"} />
      </div>
    </>
  );
};

export default FeedBack;
