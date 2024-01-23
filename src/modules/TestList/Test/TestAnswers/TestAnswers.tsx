import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";

import { Answer } from "./Answer/Answer";
import styles from "./TestAnswers.module.css";
import Button from "../../../../components/Button/Button";
import routes from "../../../../services/routes";

const TestAnswers = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const userAnswers = location.state.answers;

  const rightAnswersNum = () => {
    let rightAnsNum = 0;
    for (let i of location.state.answersTab) {
      if (i === true) {
        rightAnsNum++;
      }
    }
    return rightAnsNum;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate(routes.catalog);
  };

  return (
    <div className={styles.background}>
      <form className={styles.answersForm} onSubmit={handleSubmit}>
        <div className={styles.formTop}>
          <h2 className={styles.testName}>
            {params.names} {params.testId}
          </h2>
          <h2 className={styles.result}>
            {rightAnswersNum()}/{userAnswers.length}
          </h2>
        </div>
        {userAnswers.map((userAnswer: any, index: number) => {
          return (
            <Answer
              id={index}
              key={index}
              question={userAnswer.question}
              userAnswer={userAnswer.answer}
              answer={location.state.rightAnswers[index].rightAnswer}
              isAnswerRight={location.state.answersTab[index]}
            />
          );
        })}
        <Button type={"submit"}>На главную</Button>
      </form>
    </div>
  );
};

export default TestAnswers;
