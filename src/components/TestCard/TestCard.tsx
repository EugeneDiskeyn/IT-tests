import React from "react";

import styles from "./TestCard.module.css";

interface TestProps {
  name: string;
  difficulty: string;
  amount: number;
}

const TestCard = ({ name, difficulty, amount }: TestProps) => {
  return (
    <div className={styles.testBox}>
      <div>{name}</div>
      <div>{difficulty}</div>
      <div>{amount}</div>
    </div>
  );
};

export default TestCard;
