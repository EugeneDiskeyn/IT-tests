import React from "react";
import styles from "./Categories.module.css";
import categories from "../../utils/Categories";

const Categories = ({ category }: { category: string }) => {
  console.log(category);
  return (
    <div className={styles.main}>
      {categories.map((card) => (
        <div className={styles.container}>
          <img src={card.image} alt={card.title} />
        </div>
      ))}
    </div>
  );
};

export default Categories;
