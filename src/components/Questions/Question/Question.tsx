import React from "react";

import styles from "./Question.module.css";

interface props {
  id: number;
  question: string;
  answers: any;
  type: string;
  onClick?: (event: any) => void;
}

const Question = ({ id, question, answers, onClick, type }: props) => {
  return (
    <div className={styles.severalChoiceType}>
      <h1>
        {id}. {question}
      </h1>
      <div>
        {answers.map((answer: any, index: number) => (
          <label key={index}>
            <input type={type} name={question} onClick={onClick} />
            {answer}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Question;
