import React, { ChangeEvent, useState } from "react";
import { useParams, useLocation, useNavigate, Link } from "react-router-dom";

import styles from "./Test.module.css";
import WriteType from "../../../components/Questions/WriteType/WriteType";
import OneChoiceType from "../../../components/Questions/OneChoiceType/OneChoiceType";
import SeveralChoiceType from "../../../components/Questions/SeveralChoiceType/SeveralChoiceType";
import Button from "../../../components/Button/Button";
import arrow from "../../../images/icons/arrow.svg";
import routes from "../../../services/routes";
import testTests from "../../../utils/Tests/testTests";

interface Answer {
  id: number;
  type: string;
  question: string;
  answer: string;
}

const Test = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const testId = Number(params.testId) - 1;
  const questions = testChoice(params.names);

  const setInitialState = () => {
    const answers = [];
    const length = questions[testId].length;

    for (let i = 0; i < length; i++) {
      answers.push({
        id: questions[testId][i].id,
        type: questions[testId][i].type,
        question: questions[testId][i].question,
        answer: "",
      });
    }

    return answers;
  };

  const [answers, setAnswers] = useState<Answer[]>(setInitialState);

  const handleSubmit = () => {
    navigate(location.pathname + "/answers", { state: { answers } });
  };
  const handleWriteAnswer = (event: ChangeEvent<HTMLInputElement>) => {
    let index: number = questions[testId]
      .map((obj: { question: string }) => obj.question)
      .indexOf(event.target.name);
    const answersHolder: Answer[] = [...answers];
    answersHolder[index].answer = event.target.value;
    setAnswers(answersHolder);
  };
  const handleOneChoiceAnswer = (event: any) => {
    let index: number = questions[testId]
      .map((obj: { question: string }) => obj.question)
      .indexOf(event.target.name);
    const answersHolder: Answer[] = [...answers];
    answersHolder[index].answer = event.target.parentNode.innerText;
    setAnswers(answersHolder);
  };

  const handleSeveralChoiceAnswer = (event: any) => {
    let index: number = questions[testId]
      .map((obj: { question: string }) => obj.question)
      .indexOf(event.target.name);
    const questionLength = questions[testId][index].answers.length;
    const answersHolder: Answer[] = [...answers];

    const userAnswers: any = [];
    for (let i = 0, k = 0; i < questionLength; i++) {
      if (
        event.target.parentNode.parentElement.childNodes[i].childNodes[0]
          .checked === true
      ) {
        userAnswers[k++] = questions[testId][index].answers[i];
      }
    }
    answersHolder[index].answer = userAnswers;
    setAnswers(answersHolder);
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
      return testTests.react.test;
    case "javaScript":
      return testTests.javaScript.test;
    case "html":
      return testTests.html.test;
    case "css":
      return testTests.css.test;
    case "git":
      return testTests.git.test;
    default:
      return testTests.typeScript.test;
  }
};

export default Test;
