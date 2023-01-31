import React from "react";
import styles from "./Categories.module.css";

const Categories = ({ category }: { category: string }) => {
  console.log(category);
  return <div className={styles.main}></div>;
};

export default Categories;
