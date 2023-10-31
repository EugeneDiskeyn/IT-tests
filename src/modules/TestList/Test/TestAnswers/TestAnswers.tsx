import React, { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { Answer } from "./Answer/Answer";

import styles from "./TestAnswers.module.css";
import Button from "../../../../components/Button/Button";
import routes from "../../../../services/routes";
import testTests from "../../../../utils/Tests/testTests";

const TestAnswers = () => {
  const params = useParams();
  const location = useLocation();
  const rightAnswers = rightAnswerChoice(params);
  const navigate = useNavigate();
  const userAnswers = location.state.answers;
  let rightAnswersNum = { num: 0 };

  return (
    <div className={styles.background}>
      <form className={styles.answersForm}>
        <h1 className={styles.testName}>
          {params.names} {params.testId}
        </h1>
        {userAnswers.map((userAnswer: any, index: number) => {
          return (
            <Answer
              id={index}
              question={userAnswer.question}
              userAnswer={userAnswer.answer}
              answer={rightAnswers[index].rightAnswer}
              isAnswerRight={getIsAnswerRight(
                rightAnswers[index].rightAnswer,
                userAnswer,
                rightAnswersNum
              )}
            />
          );
        })}
        <Button
          type={"submit"}
          onClick={() => {
            navigate(routes.catalog);
          }}
        >
          На главную
        </Button>
        <h1 className={styles.result}>
          {rightAnswersNum.num}/{userAnswers.length}
        </h1>
      </form>
    </div>
  );
};

const rightAnswerChoice = (params: any) => {
  switch (params.names) {
    case "react":
      return testTests.react.answers[params.testId - 1];
    case "javaScript":
      return testTests.javaScript.answers[params.testId - 1];
    case "html":
      return testTests.html.answers[params.testId - 1];
    case "css":
      return testTests.css.answers[params.testId - 1];
    case "git":
      return testTests.git.answers[params.testId - 1];
    default:
      return testTests.typeScript.answers[params.testId - 1];
  }
};

const getIsAnswerRight = (
  rightAnswer: any,
  userAnswer: any,
  rightAnswersNum: any
) => {
  if (userAnswer.type !== "severalChoice") {
    if (rightAnswer !== userAnswer.answer) {
      return false;
    }
  } else {
    if (rightAnswer.length !== userAnswer.answer.length) {
      return false;
    } else {
      let len = rightAnswer.length;
      for (let i = 0; i < len; i++) {
        if (rightAnswer[i] !== userAnswer.answer[i]) {
          return false;
        }
      }
    }
  }
  rightAnswersNum.num++;
  return true;
};

export default TestAnswers;
