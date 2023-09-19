import React from "react";
import { useParams, Link } from "react-router-dom";

import styles from "./Test.module.css";
import WriteType from "../../../components/Questions/WriteType/WriteType";
import OneChoiceType from "../../../components/Questions/OneChoiceType/OneChoiceType";
import SeveralChoiceType from "../../../components/Questions/SeveralChoiceType/SeveralChoiceType";
import Button from "../../../components/Button/Button";

import arrow from "../../../images/icons/arrow.svg";
import routes from "../../../services/routes";
import TestTests from "../../../utils/Tests/TestTests";

const Test = () => {
  const params = useParams();
  const testId = Number(params.testId);
  const testChoice = () => {
    switch (params.names) {
      case "react":
        return TestTests.react.test;
      case "javaScript":
        return TestTests.javaScript.test;
      case "html":
        return TestTests.html.test;
      case "css":
        return TestTests.css.test;
      case "git":
        return TestTests.git.test;
      default:
        return TestTests.typeScript.test;
    }
  };
  const questions = testChoice();
  const handleSubmit = () => {
    console.log("hey");
  };

  return (
    <div className={styles.background}>
      <form className={styles.questionArea} onSubmit={handleSubmit}>
        <div className={styles.back}>
          <Link to={routes.catalog}>
            <img src={arrow} alt={arrow} />
          </Link>
          <h1>TestName</h1>
        </div>
        {questions[testId - 1].map((question: any, index: number) => {
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
