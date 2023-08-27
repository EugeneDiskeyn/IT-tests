import React, { useState } from "react";
import { Link } from "react-router-dom";

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
          <Link
            to={"/test/" + card.title}
            id={card.title}
            className={styles.container}
            key={card.id}
          >
            <img src={card.image} alt={card.title} />
          </Link>
        );
      })}
    </div>
  );
};

export default Categories;
