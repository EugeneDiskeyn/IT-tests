import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import styles from "./TestCard.module.css";

interface TestProps {
  id: number;
  name: string;
  difficulty: string;
  amount: number;
  description: string;
  skills: string;
}

const TestCard = ({
  id,
  name,
  difficulty,
  amount,
  description,
  skills,
}: TestProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const nav = () => {
    navigate(location.pathname + "/" + (id + 1));
  };
  return (
    <div className={styles.testBox} onClick={nav}>
      <img src="" alt={"mascot"} />
      <div className={styles.name}>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.difficulty}>
        <h2>Уровень</h2>
        <p>{difficulty}</p>
      </div>
      <div className={styles.amount}>
        <h2>Вопросов</h2>
        <p>{amount}</p>
      </div>
      <div className={styles.skills}>
        <h2>Навыки</h2>
        <p>{skills}</p>
      </div>
    </div>
  );
};

export default TestCard;
