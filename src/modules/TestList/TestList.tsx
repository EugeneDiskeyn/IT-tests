import React from "react";
import { useParams, Link } from "react-router-dom";

import styles from "./TestList.module.css";
import tests from "../../utils/Test";
import TestCard from "../../components/TestCard/TestCard";
import arrow from "../../images/icons/arrow.svg";
import routes from "../../services/routes";

const TestList = () => {
  const { names } = useParams();

  const filteredTests = tests.filter((card) => card.type === names);

  return (
    <div>
      <main>
        <div className={styles.back}>
          <Link to={routes.catalog}>
            <img src={arrow} alt="arrow" />
          </Link>
          <p>{names?.toUpperCase()}</p>
        </div>
        {filteredTests.map((category, index) => {
          return (
            <TestCard
              id={index}
              name={category.name}
              difficulty={category.difficulty}
              amount={category.amount}
              description={category.description}
              skills={category.skills}
              key={index}
            />
          );
        })}
      </main>
    </div>
  );
};

export default TestList;
