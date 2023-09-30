import React from "react";
import { useLocation } from "react-router-dom";

import answers from "../../../../utils/Tests/answers";

const TestAnswers = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div>
        <p>Answers</p>
      </div>
    </>
  );
};

export default TestAnswers;
