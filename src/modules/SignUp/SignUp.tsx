import { Link } from "react-router-dom";
import React from "react";
import styles from "./SignUp.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const SignIn = () => {
    return (
        <>
            <div className={styles.color}>
                <form className={styles.signingIn} action={"/"}>
                    <h1> РЕГИСТРАЦИЯ </h1>
                    <div className={styles.Line} />
                    <Input placeholder={"Электронная почта"} isDisabled={false} type={"email"} isRequired={true} />
                    <Input placeholder={"Логин"} isDisabled={false} type={"text"} isRequired={true} pattern={"[a-zA-Z0-9]{4,16}"}/>
                    <Input placeholder={"Пароль"} isDisabled={false} type={"password"} isRequired={true} />
                    <Input placeholder={"Повторите пароль"} isDisabled={false} type={"password"} isRequired={true} />
                    <Link className={styles.back} to={"/"}>У Вас уже есть аккаунт? Авторизация</Link>
                    <Button type={"submit"} isDisabled={false}>
                        РЕГИСТРАЦИЯ
                    </Button>
                </form>
            </div>
        </>
    );
};

export default SignIn;