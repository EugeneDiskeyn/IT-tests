import { react, reactAnswers } from "./react";
import { javaScript, javaScriptAnswers } from "./javaScript";
import { html, htmlAnswers } from "./html";
import { css, cssAnswers } from "./css";
import { git, gitAnswers } from "./git";
import { typeScript, typeScriptAnswers } from "./typeScript";

type Test = "react" | "javaScript" | "html" | "css" | "git" | "typeScript";
interface TestInfo {
  test: any;
  answers: any;
}

const tests: Record<Test, TestInfo> = {
  react: {
    test: react,
    answers: reactAnswers,
  },
  javaScript: {
    test: javaScript,
    answers: javaScriptAnswers,
  },
  html: {
    test: html,
    answers: htmlAnswers,
  },
  css: {
    test: css,
    answers: cssAnswers,
  },
  git: {
    test: git,
    answers: gitAnswers,
  },
  typeScript: {
    test: typeScript,
    answers: typeScriptAnswers,
  },
};

export default tests;
