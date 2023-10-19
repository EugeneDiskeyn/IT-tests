import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { Answer } from "../../../../components/Answer/Answer";

import styles from "./TestAnswers.module.css";
import answers from "../../../../utils/Tests/answers";
import Button from "../../../../components/Button/Button";
import routes from "../../../../services/routes";

const TestAnswers = () => {
  const params = useParams();
  const location = useLocation();
  const rightAnswers = rightAnswerChoice(params);
  const navigate = useNavigate();
  const userAnswers = location.state.answers;
  let rightAnswersNum = 0;

  return (
    <div className={styles.background}>
      <form className={styles.answersForm}>
        <h1 className={styles.testName}>
          {params.names} {params.testId}
        </h1>
        {userAnswers.map((userAnswer: any, index: number) => {
          let flag = true;
          if (userAnswer.type !== "severalChoice") {
            if (rightAnswers[index].rightAnswer !== userAnswer.answer) {
              flag = false;
            }
          } else {
            if (
              rightAnswers[index].rightAnswer.length !==
              userAnswer.answer.length
            ) {
              flag = false;
            } else {
              let len = rightAnswers[index].rightAnswer.length;
              for (let i = 0; i < len; i++) {
                if (
                  rightAnswers[index].rightAnswer[i] !== userAnswer.answer[i]
                ) {
                  flag = false;
                  break;
                }
              }
            }
          }
          if (flag) {
            rightAnswersNum++;
          }
          return (
            <Answer
              id={index}
              question={userAnswer.question}
              userAnswer={userAnswer.answer}
              answer={rightAnswers[index].rightAnswer}
              isAnswerRight={flag}
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
          {rightAnswersNum}/{userAnswers.length}
        </h1>
      </form>
    </div>
  );
};

const rightAnswerChoice = (params: any) => {
  switch (params.names) {
    case "react":
      return answers[0][params.testId - 1];
    case "javaScript":
      return answers[1][params.testId - 1];
    case "html":
      return answers[2][params.testId - 1];
    case "css":
      return answers[3][params.testId - 1];
    case "git":
      return answers[4][params.testId - 1];
    default:
      return answers[5][params.testId - 1];
  }
};

export default TestAnswers;
