import { Link } from "react-router-dom";
import React from "react";

import styles from "./Categories.module.css";
import categories from "../../utils/Categories";
import routes from "../../services/routes";

const Categories = ({ category }: { category: string }) => {
  const filteredCategories = categories.filter(
    (card) => card.type === category || category === "all"
  );

  return (
    <div className={styles.main}>
      {filteredCategories.map((card) => {
        return (
          <Link
            to={routes.test + "/" + card.title}
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
