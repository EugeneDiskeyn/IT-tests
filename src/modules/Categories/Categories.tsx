import React from "react";

import styles from "./Categories.module.css";
import categories from "../../utils/Categories";

const Categories = ({ category }: { category: string }) => {
  const filteredCategories = categories.filter(
    (card) => card.type === category || category === "all"
  );
  return (
    <div className={styles.main}>
      {filteredCategories.map((card) => {
        return (
          <div className={styles.container} key={card.id}>
            <img src={card.image} alt={card.title} />
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
