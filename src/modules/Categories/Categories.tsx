import React from "react";
import { Link } from "react-router-dom";

import styles from "./Categories.module.css";
import categories from "../../utils/Categories";

const Categories = ({ category }: { category: string }) => {
  const filteredCategories = categories.filter(
    (card) => card.type === category || category === "all"
  );
  let data = { title: "" };
  let changer = function (event: any) {
    data.title = event.target.id || event.target.alt;
  };
  return (
    <div className={styles.main}>
      {filteredCategories.map((card) => {
        return (
          <Link
            onClick={changer}
            to={"/test/" + card.title}
            id={card.title}
            className={styles.container}
            key={card.id}
            state={{ from: { data } }}
          >
            <img src={card.image} alt={card.title} />
          </Link>
        );
      })}
    </div>
  );
};

export default Categories;
