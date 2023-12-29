import React, { useState } from "react";

import NavBar from "../NavBar/NavBar";
import Categories from "../Categories/Categories";
import styles from "./Catalog.module.css";

const Catalog = () => {
  const [category, setCategory] = useState("all");

  const handleCategory = (event: any) => {
    const categoryNodes = event.target.parentNode.childNodes;
    if (event.target.localName === "li") {
      for (let i = 0; i < categoryNodes.length; i++) {
        categoryNodes[i].className = styles.inactive;
      }
      event.target.className = styles.active;
      setCategory(event.target.id);
    }
  };
  return (
    <>
      <NavBar />
      <div className={styles.div}>
        <ul onClick={handleCategory} className={styles.ul}>
          <li key={1} id={"all"} className={styles.active}>
            Все категории
          </li>
          <li key={2} id={"new"} className={styles.inactive}>
            Новые категории
          </li>
          <li key={3} id={"popular"} className={styles.inactive}>
            Популярные категории
          </li>
        </ul>
        <Categories category={category} />
      </div>
    </>
  );
};

export default Catalog;
