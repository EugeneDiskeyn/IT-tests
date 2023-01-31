import React from "react";
import NavBar from "../NavBar/NavBar";
import styles from "../Catalog/Catalog.module.css";
import Categories from "../Categories/Categories";
import categories from "../../utils/Categories";

const Main = () => {
  return (
    <>
      <NavBar />
      <div className={styles.div}>
        <ul className={styles.ul}>
          <li>Новые категории</li>
          <li>Популярные категории</li>
          <li>Все категории</li>
        </ul>
      </div>
    </>
  );
};
