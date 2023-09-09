import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";

import styles from "./Test.module.css";
import WriteType from "../../../components/Questions/WriteType/WriteType";
import OneChoiceType from "../../../components/Questions/OneChoiceType/OneChoiceType";
import SeveralChoiceType from "../../../components/Questions/SeveralChoiceType/SeveralChoiceType";
import Button from "../../../components/Button/Button";

import questions from "../../../utils/Tests/questions";
import arrow from "../../../images/icons/arrow.svg";
import routes from "../../../services/routes";

const Test = () => {
  const params = useParams();
  const testId = Number(params.testId);
  console.log(useLocation());
  const nameToNum = () => {
    switch (params.names) {
      case "react":
        return 0;
      case "javaScript":
        return 1;
      case "html":
        return 2;
      case "css":
        return 3;
      case "git":
        return 4;
      case "typeScript":
        return 5;
      default:
        return -1;
    }
  };
  const submited = () => {
    console.log("hey");
  };

  return (
    <div className={styles.background}>
      <form
        className={styles.questionArea}
        onSubmit={submited}
        action={"mailto:cuda@gmail.com"}
      >
        <div className={styles.back}>
          <Link to={routes.catalog}>
            <img src={arrow} alt={arrow} />
          </Link>
          <h1>TestName</h1>
        </div>
        {questions[nameToNum()][testId - 1].map((question, index) => {
          if (question.type === "write") {
            return <WriteType id={index + 1} question={question.question} />;
          } else if (question.type === "oneChoice") {
            return (
              <OneChoiceType
                id={index + 1}
                question={question.question}
                answers={question.answers}
              />
            );
          } else {
            return (
              <SeveralChoiceType
                id={index + 1}
                question={question.question}
                answers={question.answers}
              />
            );
          }
        })}
        <Button type={"submit"}>Завершить тест</Button>
      </form>
    </div>
  );
};
export default Test;
