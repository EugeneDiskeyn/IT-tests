import React, { ChangeEvent, useState } from "react";
import { useParams, useLocation, useNavigate, Link } from "react-router-dom";

import styles from "./Test.module.css";
import WriteQuestion from "../../../components/Questions/WriteQuestion/WriteQuestion";
import Button from "../../../components/Button/Button";
import arrow from "../../../images/icons/arrow.svg";
import routes from "../../../services/routes";
import testTests from "../../../utils/Tests/testTests";
import Question from "../../../components/Questions/Question/Question";

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
  const rightAnswers = rightAnswerChoice(params);
  const setInitialState = () => {
    const answers = [];

    for (let question of questions[testId]) {
      answers.push({
        id: question.id,
        type: question.type,
        question: question.question,
        answer: "",
      });
    }

    return answers;
  };

  const [answers, setAnswers] = useState<Answer[]>(setInitialState);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const answersTab = getIsAnswerRight(rightAnswers, answers);

    navigate(`${location.pathname}/answers`, {
      state: { answers, answersTab, rightAnswers },
    });
  };

  const handleWriteAnswer = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const index: number = questions[testId]
      .map((obj: { question: string }) => obj.question)
      .indexOf(event.target.name);
    const answersHolder: Answer[] = [...answers];
    answersHolder[index].answer = event.target.value;
    setAnswers(answersHolder);
  };

  const handleOneChoiceAnswer = (event: any) => {
    const index: number = questions[testId]
      .map((obj: { question: string }) => obj.question)
      .indexOf(event.target.name);
    const answersHolder: Answer[] = [...answers];
    answersHolder[index].answer = event.target.parentNode.innerText;
    setAnswers(answersHolder);
  };

  const handleSeveralChoiceAnswer = (event: any) => {
    const index: number = questions[testId]
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
  console.log(params);
  return (
    <div className={styles.background}>
      <form className={styles.questionArea} onSubmit={handleSubmit}>
        <div className={styles.back}>
          <Link to={routes.catalog}>
            <img src={arrow} alt={arrow} />
          </Link>
          <h2>{location.state.name}</h2>
        </div>
        {questions[testId].map((question: any, index: number) => {
          if (question.type === "write") {
            return (
              <WriteQuestion
                key={index + 1}
                id={index + 1}
                question={question.question}
                onChange={handleWriteAnswer}
              />
            );
          } else {
            if (question.type === "oneChoice") {
              return (
                <Question
                  key={index + 1}
                  id={index + 1}
                  question={question.question}
                  answers={question.answers}
                  onClick={handleOneChoiceAnswer}
                  type={"radio"}
                />
              );
            } else {
              return (
                <Question
                  key={index + 1}
                  id={index + 1}
                  question={question.question}
                  answers={question.answers}
                  onClick={handleSeveralChoiceAnswer}
                  type={"checkbox"}
                />
              );
            }
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
    case "typeScript":
      return testTests.typeScript.test;
    default:
      return testTests.react.test;
  }
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
    case "typeScript":
      return testTests.typeScript.answers[params.testId - 1];
    default:
      return testTests.react.answers[params.testId - 1];
  }
};

const getIsAnswerRight = (rightAnswers: any, userAnswers: any) => {
  const answersTab: any = [];
  userAnswers.map((userAnswer: any, index: number) => {
    if (userAnswer.type !== "severalChoice") {
      answersTab.push(rightAnswers[index].rightAnswer === userAnswer.answer);
    } else {
      answersTab.push(
        rightAnswers[index].rightAnswer.every(
          (item: any, i: number) => item === userAnswer.answer[i]
        )
      );
    }
  });
  return answersTab;
};

export default Test;
