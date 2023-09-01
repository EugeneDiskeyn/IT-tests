import React from "react";

import styles from "./WriteType.module.css";

interface Props {
  id: number;
  question: string;
}

const WriteType = ({ id, question }: Props) => {
  return (
    <div className={styles.writeType}>
      <p>
        {id}. {question}
      </p>
      <textarea placeholder={"Ответ"} />
    </div>
  );
};

export default WriteType;
