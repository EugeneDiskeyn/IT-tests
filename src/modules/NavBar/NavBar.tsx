import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div onClick={changer} className={styles.main}>
      <Link to={"/main"}>Каталог</Link>
      <Link to={"/statistics"}>Статистика</Link>
      <Link to={"/feedBack"}>Обратная связь</Link>
      <Link to={"/profile"}>Профиль</Link>
    </div>
  );
};
function changer(event: any) {
  if (event.target.tagName === "A") {
    const childNodes = event.target.parentElement.parentElement.childNodes;
    for (let i = 0; i < childNodes.length; i++) {
      childNodes[i].className = styles.inactive;
    }
    event.target.className = styles.active;
    console.dir(event.target.parentElement.parentElement.childNodes);
  }
}
export default NavBar;
