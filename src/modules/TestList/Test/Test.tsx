import React, { useState } from "react";
import { useParams, useLocation, useNavigate, Link } from "react-router-dom";

import styles from "./Test.module.css";
import WriteType from "../../../components/Questions/WriteType/WriteType";
import OneChoiceType from "../../../components/Questions/OneChoiceType/OneChoiceType";
import SeveralChoiceType from "../../../components/Questions/SeveralChoiceType/SeveralChoiceType";
import Button from "../../../components/Button/Button";
import arrow from "../../../images/icons/arrow.svg";
import routes from "../../../services/routes";
import TestTests from "../../../utils/Tests/TestTests";

const Test = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const testId = Number(params.testId) - 1;
  const questions = testChoice(params.names);

  const initialState = () => {
    let safe: any = [];
    let length = questions[testId].length;
    safe.length = length;
    for (let i = 0; i < length; i++) {
      safe[i] = {
        type: questions[testId][i].type,
        question: questions[testId][i].question,
        answer: "",
      };
    }
    return safe;
  };

  const [answers, setAnswers] = useState(initialState);

  const handleSubmit = () => {
    navigate(location.pathname + "/answers", { state: { answers } });
    console.log("hey");
  };

  const handleWriteAnswer = (event: any) => {
    let index: number = 0;
    const safe: any = answers;
    questions[testId].map((question: any) => {
      if (question.question === event.target.name) {
        index = question.id - 1;
      }
    });
    safe[index].answer = event.target.value;
    setAnswers(safe);
  };

  const handleOneChoiceAnswer = (event: any) => {
    let index: number = 0;
    const safe: any = answers;
    questions[testId].map((question: any) => {
      if (question.question === event.target.name) {
        index = question.id - 1;
      }
    });
    safe[index].answer = event.target.parentNode.innerText;
    setAnswers(safe);
    console.log(answers);
  };

  const handleSeveralChoiceAnswer = (event: any) => {
    let index: number = 0;
    const safe: any = answers;
    questions[testId].map((question: any) => {
      if (question.question === event.target.name) {
        index = question.id - 1;
      }
    });

    const answerRememberer: any = [];
    for (let i = 0, k = 0; i < questions[testId][index].answers.length; i++) {
      if (
        event.target.parentNode.parentElement.childNodes[i].childNodes[0]
          .checked === true
      ) {
        answerRememberer[k++] = questions[testId][index].answers[i];
      }
    }
    safe[index].answer = answerRememberer;
    setAnswers(safe);
    console.log(answers);
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
        {questions[testId].map((question: any, index: number) => {
          if (question.type === "write") {
            return (
              <WriteType
                id={index + 1}
                question={question.question}
                onChange={handleWriteAnswer}
              />
            );
          } else if (question.type === "oneChoice") {
            return (
              <OneChoiceType
                id={index + 1}
                question={question.question}
                answers={question.answers}
                onClick={handleOneChoiceAnswer}
              />
            );
          } else {
            return (
              <SeveralChoiceType
                id={index + 1}
                question={question.question}
                answers={question.answers}
                onClick={handleSeveralChoiceAnswer}
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
