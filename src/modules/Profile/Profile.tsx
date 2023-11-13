import React, { useState, useContext } from "react";
import NavBar from "../NavBar/NavBar";
import Input from "../../components/Input/Input";
import { UserContext } from "../../App";

import styles from "./Profile.module.css";
import Fox from "../../images/icons/Fox.svg";
import Edit from "../../images/icons/Edit.svg";
import Logout from "../../images/icons/Logout.svg";
import { Popup } from "./Popup/Popup";

const Profile = () => {
  const gmailContext = useContext(UserContext);
  console.log(gmailContext);
  const [isPopupHidden, setIsPopupHidden] = useState(true);
  return (
    <div>
      <NavBar />
      <div className={styles.profile}>
        <div className={styles.generalInf}>
          <img className={styles.fox} src={Fox} alt={"Fox icon"} />
          <div>
            <h2>James Bond</h2>
            <p>Gmail</p>
          </div>
          <img className={styles.logout} src={Logout} alt={"Exit icon"} />
        </div>
        <div className={styles.inputs}>
          <div>
            <Input
              placeholder={"Имя"}
              type={"text"}
              isDisabled
              isEditable
              onClick={() => setIsPopupHidden(false)}
              value={gmailContext.login}
            />
          </div>
          <div>
            <Input
              placeholder={"Фамилия"}
              type={"text"}
              isDisabled
              isEditable
            />
          </div>
          <div>
            <Input placeholder={"Телефон"} type={"text"} isDisabled />
          </div>
          <div>
            <Input
              placeholder={"Почта"}
              type={"email"}
              isDisabled
              value={gmailContext.gmail}
            />
          </div>
        </div>
      </div>
      {(() => {
        if (isPopupHidden) {
        } else {
          return (
            <Popup
              onClick={() => {
                setIsPopupHidden(true);
              }}
            />
          );
        }
      })()}
    </div>
  );
};

export default Profile;
