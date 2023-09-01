import React from "react";

import styles from "./Test.module.css";
import WriteType from "../../../components/Questions/WriteType/WriteType";
import OneChoiceType from "../../../components/Questions/OneChoiceType/OneChoiceType";
import SeveralChoiceType from "../../../components/Questions/SeveralChoiceType/SeveralChoiceType";
import Button from "../../../components/Button/Button";

const Test = () => {
  return (
    <div className={styles.background}>
      <div className={styles.questionArea}>
        <h1>TestName</h1>
        <WriteType id={1} question={"Yes or no"} />
        <OneChoiceType
          id={2}
          question={"Choose one"}
          answers={["this", "that"]}
        />
        <SeveralChoiceType
          id={3}
          question={"Choose several"}
          answers={["this", "that", "those", "these"]}
        />
        <Button>Подтвердить</Button>
      </div>
    </div>
  );
};
export default Test;
