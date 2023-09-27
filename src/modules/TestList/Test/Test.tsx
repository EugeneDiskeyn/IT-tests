import React, { useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";

import styles from "./Test.module.css";
import WriteType from "../../../components/Questions/WriteType/WriteType";
import OneChoiceType from "../../../components/Questions/OneChoiceType/OneChoiceType";
import SeveralChoiceType from "../../../components/Questions/SeveralChoiceType/SeveralChoiceType";
import Button from "../../../components/Button/Button";
import arrow from "../../../images/icons/arrow.svg";
import routes from "../../../services/routes";
import TestTests from "../../../utils/Tests/TestTests";

const Test = () => {
  const location = useLocation();
  const params = useParams();
  const testId = Number(params.testId);
  const questions = testChoice(params.names);
  const [answers, setAnswers] = useState([]);
  const handleSubmit = () => {
    console.log("hey");
  };

  const something = (event: any) => {
    let index: number = 0;
    let safe: any = answers;
    questions[testId - 1].map((question: any) => {
      if (question.question === event.target.name) {
        index = question.id - 1;
      }
    });
    if (answers.length === 0) {
      let length = questions[testId - 1].length;
      safe.length = length;
      for (let i = 0; i < length; i++) {
        safe[i] = {
          type: questions[testId - 1][i].type,
          question: questions[testId - 1][i].question,
          answer: "",
        };
      }
      setAnswers(safe);
    }
    safe = answers;
    if (questions[testId - 1][index].type === "oneChoice") {
      safe[index].answer = event.target.parentNode.innerText;
    } else if (questions[testId - 1][index].type === "write") {
      safe[index].answer = event.target.value;
    } else {
      let answerRememberer: any = [];
      for (
        let i = 0, k = 0;
        i < questions[testId - 1][index].answers.length;
        i++
      ) {
        if (
          event.target.parentNode.parentElement.childNodes[i].childNodes[0]
            .checked === true
        ) {
          answerRememberer[k++] = questions[testId - 1][index].answers[i];
        }
      }
      safe[index].answer = answerRememberer;
    }
    setAnswers(safe);
    console.log(safe);
  };

  return (
    <div className={styles.background}>
      <form className={styles.questionArea} onSubmit={handleSubmit}>
        <div className={styles.back}>
          <Link to={routes.catalog}>
            <img src={arrow} alt={arrow} />
          </Link>
          <h1>{location.state.name}</h1>
        </div>
        {questions[testId - 1].map((question: any, index: number) => {
          if (question.type === "write") {
            return (
              <WriteType
                id={index + 1}
                question={question.question}
                onChange={something}
              />
            );
          } else if (question.type === "oneChoice") {
            return (
              <OneChoiceType
                id={index + 1}
                question={question.question}
                answers={question.answers}
                onClick={something}
              />
            );
          } else {
            return (
              <SeveralChoiceType
                id={index + 1}
                question={question.question}
                answers={question.answers}
                onClick={something}
              />
            );
          }
        })}
        <Button type={"submit"}>Завершить тест</Button>
      </form>
    </div>
  );
};

const testChoice = (name?: string) => {
  switch (name) {
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

export default Test;
