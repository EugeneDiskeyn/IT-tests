import React from "react";
import styles from "./NavBar.module.css";
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
      <div className={styles.main}>
        <Link to={"/main"}>
          <p>Каталог</p>
        </Link>
        <Link to={"/statistics"}>
          <p>Статистика</p>
        </Link>
        <Link to={"/feedBack"}>
          <p>Обратная связь</p>
        </Link>
        <div className={styles.box} />
        <Link to={"/profile"}>
          <p>Профиль</p>
        </Link>
      </div>
  )
}
export default NavBar;
