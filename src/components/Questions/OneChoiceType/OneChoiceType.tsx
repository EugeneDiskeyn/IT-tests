import React from "react";
import styles from "../OneChoiceType/OneChoiceType.module.css";

interface props {
  id: number;
  question: string;
  answers: string[];
}

const OneChoiceType = ({ id, question, answers }: props) => {
  return (
    <div className={styles.oneChoiceType}>
      <p>
        {id}. {question}
      </p>
      {answers.map((answer, index) => (
        <label key={index}>
          <input type={"radio"} name={question} />
          {answer}
        </label>
      ))}
    </div>
  );
};

export default OneChoiceType;
