import React from "react";
import styles from "./Answer.module.css";
import Button from "../Button/Button";

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
    backgroundColor: "",
    color: "",
  };
  if (isAnswerRight) {
    styleObj.backgroundColor = "#DDFFD8";
    styleObj.color = "#63925B";
  } else {
    styleObj.backgroundColor = "#FFD8D8";
    styleObj.color = "#AA5550";
  }

  return (
    <div className={styles.answer}>
      <div className={styles.question}>
        <h1>
          {id + 1}. {question}
        </h1>
        <div style={styleObj}>
          {(() => {
            if (isAnswerRight) {
              return "Верно";
            } else {
              return "Неверно";
            }
          })()}
        </div>
      </div>
      <div className={styles.answers}>
        <p>
          <b>Ваш ответ: </b>
          {(() => {
            if (typeof userAnswer === "string") {
              return userAnswer;
            } else {
              let userAnswerStr = "";
              userAnswer.map((oneAnswer) => {
                userAnswerStr += oneAnswer + "; ";
              });
              return userAnswerStr;
            }
          })()}
        </p>
      </div>
      <div className={styles.rightAnswers}>
        <p>
          <b>Правильные ответы: </b>
          {(() => {
            if (typeof answer === "string") {
              return answer;
            } else {
              let answerStr = "";
              answer.map((oneAnswer) => {
                answerStr += oneAnswer + "; ";
              });
              return answerStr;
            }
          })()}
        </p>
      </div>
    </div>
  );
};

export { Answer };
