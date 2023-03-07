import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Categories from "../Categories/Categories";
import styles from "./Catalog.module.css";

const Catalog = () => {
  const [category, setCategory] = useState("all");
  function getCategory(event: any) {
    if (event.target.localName === "li") {
      console.dir(event.target);
      for (let i = 0; i < 3; i++) {
        event.target.parentNode.childNodes[i].className = styles.inactive;
      }
      event.target.className = styles.active;
      setCategory(event.target.id);
    }
  }
  return (
    <>
      <NavBar />
      <div className={styles.div}>
        <ul onClick={getCategory} className={styles.ul}>
          <li id={"all"} className={styles.active}>
            Все категории
          </li>
          <li id={"new"} className={styles.inactive}>
            Новые категории
          </li>
          <li id={"popular"} className={styles.inactive}>
            Популярные категории
          </li>
        </ul>
        <Categories category={category} />
      </div>
    </>
  );
};

export default Catalog;
