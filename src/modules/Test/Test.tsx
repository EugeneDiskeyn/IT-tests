import React from "react";
import { useLocation, useParams, Link } from "react-router-dom";

import styles from "./Test.module.css";
import react from "../../utils/React";
import javaScript from "../../utils/JavaScript";
import html from "../../utils/HTML";
import css from "../../utils/Css";
import git from "../../utils/GIT";
import typeScript from "../../utils/TypeScript";
import TestCard from "../../components/TestCard/TestCard";
import arrow from "./arrow.png";
import routes from "../../services/routes";

const Test = () => {
  const location = useLocation();
  const { from } = location.state;
  const { names } = useParams();

  const categoryChoose = () => {
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
  const chosenCategories = categoryChoose();
  return (
    <div>
      <main>
        <div className={styles.back}>
          <Link to={routes.catalog}>
            <img src={arrow} alt="arrow" />
          </Link>
          <p>{names?.toUpperCase()}</p>
        </div>
        {chosenCategories.map((category) => {
          return (
            <TestCard
              name={category.name}
              difficulty={category.difficulty}
              amount={category.amount}
              description={category.description}
              skills={category.skills}
            />
          );
        })}
      </main>
    </div>
  );
};

export default Test;
