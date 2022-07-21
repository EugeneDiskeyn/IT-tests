import {Link} from "react-router-dom";
import React from "react";
import styles from "./SignUp.module.css"

const SignUp = () => {
    return (
        <>
            <div className={styles.authorisation}>
                <h1>Авторизация</h1>
                <Link to="/SignIn">Регистрация</Link>
                <Link to="/main">Войти</Link>
            </div>
        </>
    )
}
export default SignUp;