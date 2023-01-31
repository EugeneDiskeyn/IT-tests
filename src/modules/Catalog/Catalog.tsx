import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Categories from "../Categories/Categories";
import styles from "./Catalog.module.css";

const Catalog = () => {
  const [category, setCategory] = useState("Something");
  function getCategory(event: any) {
    setCategory(event.target.id);
  }
  return (
    <>
      <NavBar />
      <div className={styles.div}>
        <ul onClick={getCategory} className={styles.ul}>
          <li id={"new"}>Новые категории</li>
          <li id={"popular"}>Популярные категории</li>
          <li id={"all"}>Все категории</li>
        </ul>
        <Categories category={category} />
      </div>
    </>
  );
};

export default Catalog;
