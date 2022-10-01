import React from "react";
import styles from "./Categories.module.css";
import logo1 from "../../images/logos/react.png";

const Categories = ({ categories }: { categories: any }) => {
  return (
    <div className={styles.main}>
      {categories.map(
        (category: { title: string; image: string; id: number }) => (
          <div key={category.id} className={styles.container}>
            <li>{category.title}</li>
            <img src={category.image} alt={category.title} />
          </div>
        )
      )}
    </div>
  );
};

export default Categories;
