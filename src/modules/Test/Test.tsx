import React from "react";
import { useLocation } from "react-router-dom";

import styles from "./Test.module.css";
import react from "../../utils/React";
import javaScript from "../../utils/JavaScript";
import html from "../../utils/HTML";
import css from "../../utils/Css";
import git from "../../utils/GIT";
import typeScript from "../../utils/TypeScript";
import NavBar from "../NavBar/NavBar";
import arrow from "./arrow.png";

const Test = () => {
  const location = useLocation();
  const { from } = location.state;

  const a = () => {
    if (from.data.title == "react") {
      return react;
    } else if (from.data.title == "javaScript") {
      return javaScript;
    } else if (from.data.title == "html") {
      return html;
    } else if (from.data.title == "css") {
      return css;
    } else if (from.data.title == "git") {
      return git;
    } else {
      return typeScript;
    }
  };
  const chosenCategories = a();
  return (
    <div>
      <img src={arrow} />
      <NavBar />
      <main>
        {chosenCategories.map((category) => {
          return (
            <div className={styles.testBox}>
              <div>{category.name}</div>
              <div>{category.difficulty}</div>
              <div>{category.amount}</div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Test;
