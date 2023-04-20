import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <>
      <div className={styles.main}>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "orange" : "white",
          })}
          to={"/main"}
          className={styles.inactive}
        >
          Каталог
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "orange" : "white",
          })}
          to={"/statistics"}
          className={styles.inactive}
        >
          Статистика
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "orange" : "white",
          })}
          to={"/feedBack"}
          className={styles.inactive}
        >
          Обратная связь
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "orange" : "white",
          })}
          to={"/Profile"}
          className={styles.inactive}
        >
          Профиль
        </NavLink>
      </div>
    </>
  );
};
export default NavBar;
