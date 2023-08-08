import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <>
      <div className={styles.main}>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#594F77" : "#594F77",
            fontWeight: isActive ? "800" : "400",
          })}
          to={"/catalog"}
          className={styles.inactive}
        >
          Каталог
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#594F77" : "#594F77",
            fontWeight: isActive ? "800" : "400",
          })}
          to={"/statistics"}
          className={styles.inactive}
        >
          Статистика
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#594F77" : "#594F77",
            fontWeight: isActive ? "800" : "400",
          })}
          to={"/feedBack"}
          className={styles.inactive}
        >
          Обратная связь
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#594F77" : "#594F77",
            fontWeight: isActive ? "800" : "400",
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
