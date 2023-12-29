import React from "react";

import styles from "./WriteQuestion.module.css";

interface Props {
  id: number;
  question: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const WriteQuestion = ({ id, question, onChange }: Props) => {
  return (
    <div className={styles.writeType}>
      <h1>
        {id}. {question}
      </h1>
      <textarea name={question} placeholder={"Ответ"} onChange={onChange} />
    </div>
  );
};

export default WriteQuestion;
