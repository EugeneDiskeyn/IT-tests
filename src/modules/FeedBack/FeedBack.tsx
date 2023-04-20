import React from "react";

import NavBar from "../NavBar/NavBar";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import styles from "./FeedBack.module.css";
import assistant from "../../images/logos/virtual-assistant.svg";

const FeedBack = () => {
  return (
    <>
      <NavBar />
      <div className={styles.form_img}>
        <form className={styles.feedback}>
          <h1>Мы на связи</h1>
          <Input placeholder={"Логин"} type={"text"} isRequired={true} />
          <Input placeholder={"E-mail"} type={"text"} isRequired={true} />
          <Input placeholder={"Телефон"} type={"text"} isRequired={true} />
          <select className={styles.sel}>
            <option>Option1</option>
            <option>Option2</option>
            <option>Option3</option>
            <option>Option4</option>
          </select>
          <textarea className={styles.feedarea} />
          <Button>Отправить</Button>
        </form>
        <img src={assistant} alt={"virtual assistant"} />
      </div>
    </>
  );
};

export default FeedBack;
