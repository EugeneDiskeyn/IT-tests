import React from "react";
import styles from "./Answer.module.css";

interface props {
  id: number;
  question: string;
  userAnswer: string;
  answer: string | string[];
  isAnswerRight: boolean;
}

const Answer = ({ id, question, userAnswer, answer, isAnswerRight }: props) => {
  return (
    <div className={styles.answer}>
      <h1>
        {id + 1}. {question}
      </h1>
      <div>
        <h2>Ваши ответы</h2>
        <p className={styles.userAnswer}>{userAnswer}</p>
      </div>
      <div>
        <h2>Правильные ответы</h2>
        <p className={styles.rightAnswer}>{answer}</p>
      </div>
    </div>
  );
};

export { Answer };
