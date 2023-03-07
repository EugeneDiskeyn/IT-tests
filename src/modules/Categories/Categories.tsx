import React from "react";
import styles from "./Categories.module.css";
import categories from "../../utils/Categories";

const Categories = ({ category }: { category: string }) => {
  return (
    <div className={styles.main}>
      {categories.map((card) => {
        if (card.type === category || category === "all") {
          return (
            <div className={styles.container} key={card.id}>
              <img src={card.image} alt={card.title} />
            </div>
          );
        }
      })}
    </div>
  );
};
export default Categories;
