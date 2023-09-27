import React from "react";

interface props {
  question: string;
  userAnswer: string;
  answer: string;
}

const Answer = ({ question, userAnswer, answer }: props) => {
  return (
    <div>
      <p>{question}</p>
      <p>{userAnswer}</p>
      <p>{answer}</p>
    </div>
  );
};

export { Answer };
