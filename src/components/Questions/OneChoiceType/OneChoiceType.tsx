import React from "react";

import styles from "../OneChoiceType/OneChoiceType.module.css";

interface props {
  id: number;
  question: string;
  answers: any;
  onClick?: (event: any) => void;
}

const OneChoiceType = ({ id, question, answers, onClick }: props) => {
  return (
    <div className={styles.oneChoiceType}>
      <h1>
        {id}. {question}
      </h1>
      {answers.map((answer: any, index: number) => (
        <label key={index}>
          <input
            id={id.toString()}
            type={"radio"}
            name={question}
            onClick={onClick}
          />
          {answer}
        </label>
      ))}
    </div>
  );
};

export default OneChoiceType;
