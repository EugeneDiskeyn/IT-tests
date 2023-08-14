import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import styles from "./NavBar.module.css";
import routes from "../../services/routes";

const NavBar = () => {
  return (
    <>
      <div className={styles.main}>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#594F77" : "#594F77",
            fontWeight: isActive ? "800" : "400",
          })}
          to={routes.catalog}
          className={styles.inactive}
        >
          Каталог
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#594F77" : "#594F77",
            fontWeight: isActive ? "800" : "400",
          })}
          to={routes.statistics}
          className={styles.inactive}
        >
          Статистика
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#594F77" : "#594F77",
            fontWeight: isActive ? "800" : "400",
          })}
          to={routes.feedback}
          className={styles.inactive}
        >
          Обратная связь
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#594F77" : "#594F77",
            fontWeight: isActive ? "800" : "400",
          })}
          to={routes.profile}
          className={styles.inactive}
        >
          Профиль
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};
export default NavBar;
