import React from "react";

import styles from "./Question.module.css";

interface props {
  id: number;
  question: string;
  answers: any;
  type: string;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
}

const Question = ({ id, question, answers, onClick, type }: props) => {
  return (
    <div className={styles.severalChoiceType}>
      <h2>
        {id}. {question}
      </h2>
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
