import React from "react";

import styles from "./SeveralChoiceType.module.css";

interface props {
  id: number;
  question: string;
  answers: any;
  onClick?: (event: any) => void;
}

const SeveralChoiceType = ({ id, question, answers, onClick }: props) => {
  return (
    <div className={styles.severalChoiceType}>
      <h1>
        {id}. {question}
      </h1>
      <div>
        {answers.map((answer: any, index: number) => (
          <label key={index}>
            <input
              id={index.toString()}
              type={"checkbox"}
              name={question}
              onClick={onClick}
            />
            {answer}
          </label>
        ))}
      </div>
    </div>
  );
};

export default SeveralChoiceType;
