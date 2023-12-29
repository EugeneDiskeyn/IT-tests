import React, { useState } from "react";

import NavBar from "../NavBar/NavBar";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import getter from "../../utils/localStorage/getter";
import styles from "./FeedBack.module.css";
import assistant from "../../images/logos/virtual-assistant.svg";

const FeedBack = () => {
  const users = getter();
  const [login, setLogin] = useState<string>();
  const [gmail, setGmail] = useState<string>();

  const loginSetter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };
  const gmailSetter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGmail(event.target.value);
  };
  const handleSubmit = () => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].gmail === gmail && users[i].login === login) {
        console.log("Feedback sent");
      }
    }
  };
  return (
    <>
      <NavBar />
      <div className={styles.form_img}>
        <form className={styles.feedback} onSubmit={handleSubmit}>
          <h1>Мы на связи</h1>
          <Input
            placeholder={"Логин"}
            type={"text"}
            isRequired={true}
            onChange={loginSetter}
          />
          <Input
            placeholder={"E-mail"}
            type={"text"}
            isRequired={true}
            onChange={gmailSetter}
          />
          <Input
            placeholder={"Телефон"}
            type={"text"}
            pattern="\+?[0-9\s\-\(\)]+"
            isRequired={true}
          />
          <select className={styles.sel}>
            <option>Option1</option>
            <option>Option2</option>
            <option>Option3</option>
            <option>Option4</option>
          </select>
          <textarea className={styles.feedarea} />
          <Button type={"submit"}>Отправить</Button>
        </form>
        <img src={assistant} alt={"virtual assistant"} />
      </div>
    </>
  );
};

export default FeedBack;
