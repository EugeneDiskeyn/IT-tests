import React from "react";
import styles from "./Categories.module.css";
import categories from "../../utils/Categories";

const Categories = ({ category }: { category: string }) => {
  console.log(category);
  let popular: number[] = [],
    new_categ: number[] = [];
  for (let i = 0; i < categories.length; i++) {
    if (categories[i].type === "popular") {
      popular.push(i);
    }
    if (categories[i].type === "new") {
      new_categ.push(i);
    }
  }
  if (category === "popular") {
    return (
      <div className={styles.main}>
        {popular.map((card) => (
          <div className={styles.container}>
            <img src={categories[card].image} alt={categories[card].title} />
          </div>
        ))}
      </div>
    );
  } else if (category === "new") {
    return (
      <div className={styles.main}>
        {new_categ.map((card) => (
          <div className={styles.container}>
            <img src={categories[card].image} alt={categories[card].title} />
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className={styles.main}>
        {categories.map((card) => (
          <div className={styles.container}>
            <img src={card.image} alt={card.title} />
          </div>
        ))}
      </div>
    );
  }
};

export default Categories;
