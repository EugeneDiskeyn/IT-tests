import react from "./react";
import javaScript from "./javaScript";
import html from "./html";
import css from "./css";
import git from "./git";
import typeScript from "./typeScript";

type Test = "react" | "javaScript" | "html" | "css" | "git" | "typeScript";
interface TestInfo {
  test: any;
}

const tests: Record<Test, TestInfo> = {
  react: {
    test: react,
  },
  javaScript: {
    test: javaScript,
  },
  html: {
    test: html,
  },
  css: {
    test: css,
  },
  git: {
    test: git,
  },
  typeScript: {
    test: typeScript,
  },
};

export default tests;
