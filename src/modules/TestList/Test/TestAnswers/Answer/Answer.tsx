import React from "react";

import styles from "./Answer.module.css";

interface props {
  id: number;
  question: string;
  userAnswer: string | string[];
  answer: string | string[];
  isAnswerRight: boolean;
}

const Answer = ({ id, question, userAnswer, answer, isAnswerRight }: props) => {
  const styleObj = {
    height: "26px",
    width: "77px",
    backgroundColor: isAnswerRight ? "#DDFFD8" : "#FFD8D8",
    color: isAnswerRight ? "#63925B" : "#AA5550",
  };

  const severalAnswers = (answer: any) => {
    let answerStr = "";
    for (let oneAnswer of answer) {
      answerStr += oneAnswer + "; ";
    }
    return answerStr;
  };

  return (
    <div className={styles.answer}>
      <div className={styles.question}>
        <h2>
          {id + 1}. {question}
        </h2>
        <div style={styleObj}>
          {(() => {
            return isAnswerRight ? "Верно" : "Неверно";
          })()}
        </div>
      </div>
      <div className={styles.answers}>
        <p>
          <b>Ваш ответ: </b>
          {typeof answer === "string" ? userAnswer : severalAnswers(userAnswer)}
        </p>
      </div>
      <div className={styles.rightAnswers}>
        <p>
          <b>Правильные ответы: </b>
          {typeof answer === "string" ? answer : severalAnswers(answer)}
        </p>
      </div>
    </div>
  );
};

export { Answer };
