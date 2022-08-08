import { Link } from "react-router-dom";
import React from "react";
import styles from "./SignUp.module.css";

const SignIn = () => {
  return (
    <>
      <div className={styles.signingIn}>
        <h1> Регистрация </h1>
        <Link to="/">Вход</Link>
      </div>
    </>
  );
};

export default SignIn;
