import React from "react";
import { useNavigate } from "react-router-dom";

import notFound from "../../images/logos/404.svg";
import styles from "./NotFound.module.css";
import routes from "../../services/routes";

const NotFound = () => {
  const navigate = useNavigate();
  const handler = () => {
    navigate(routes.authorisation);
  };

  return (
    <div className={styles.main}>
      <img
        className={styles.image}
        src={notFound}
        alt={"Not Found"}
        onClick={handler}
      />
    </div>
  );
};

export default NotFound;
