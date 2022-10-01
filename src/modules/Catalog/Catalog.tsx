import React from "react";
import NavBar from "../NavBar/NavBar";
import Categories from "../Categories/Categories";
import styles from "./Catalog.module.css";
import categories from "../../utils/Categories";

const Catalog = () => {
  return (
      <div className={styles.col}>
        <NavBar />
        <div>
            <ul className={styles.ul}>
                <li>Новые категории</li>
                <li>Популярные категории</li>
                <li>Все категории</li>
            </ul>
            <Categories categories={categories} />
        </div>
      </div>
  );
};

export default Catalog;
