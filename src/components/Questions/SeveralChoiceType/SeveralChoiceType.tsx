import React from "react";

import styles from "./SeveralChoiceType.module.css";

interface props {
  id: number;
  question: string;
  answers: string[];
}

const SeveralChoiceType = ({ id, question, answers }: props) => {
  return (
    <div className={styles.severalChoiceType}>
      <p>
        {id}. {question}
      </p>
      {answers.map((answer, index) => (
        <label key={index}>
          <input type={"checkbox"} name={question} />
          {answer}
        </label>
      ))}
    </div>
  );
};

export default SeveralChoiceType;
