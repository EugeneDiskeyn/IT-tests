import React from "react";
import NavBar from "../NavBar/NavBar";
import Input from "../../components/Input/Input";
import styles from "./FeedBack.module.css";

const FeedBack = () => {
  return (
    <div>
      <NavBar />
      <form className={styles.feedback}>
        <h1>Мы на связи</h1>
        <Input
          placeholder={"Логин"}
          type={"text"}
          isDisabled={false}
          isRequired={true}
        />
        <Input
          placeholder={"E-mail"}
          type={"text"}
          isDisabled={false}
          isRequired={true}
        />
        <Input
          placeholder={"Телефон"}
          type={"text"}
          isDisabled={false}
          isRequired={true}
        />
        <select className={styles.sel}>
          <option>Option1</option>
          <option>Option2</option>
          <option>Option3</option>
          <option>Option4</option>
        </select>
        <textarea className={styles.feedarea} />
      </form>
    </div>
  );
};

export default FeedBack;
