import React from "react";
import { useNavigate } from "react-router-dom";
import notFound from "../../images/logos/404.svg";
import styles from "./NotFound.module.css";

const NotFound = () => {
  const navigate = useNavigate();
  const handler = () => {
    navigate("/main");
  };
  return (
    <>
      <img
        className={styles.image}
        src={notFound}
        alt={"Not Found"}
        onClick={handler}
      />
    </>
  );
};

export default NotFound;
