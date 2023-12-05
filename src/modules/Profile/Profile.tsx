import React, { useState, useContext } from "react";

import styles from "./Profile.module.css";
import NavBar from "../NavBar/NavBar";
import Input from "../../components/Input/Input";
import getter from "../../utils/localStorage/getter";
import { Popup } from "./Popup/Popup";
import { GmailContext } from "../../App";
import Fox from "../../images/icons/Fox.svg";
import Logout from "../../images/icons/Logout.svg";

const Profile = () => {
  const [gmailContext, setGmailContext] = useContext(GmailContext);
  const [inputType, setInputType] = useState("");
  const [isPopupHidden, setIsPopupHidden] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const users = getter();

  const indexOfUser: number = users
    .map((user: { gmail: string }) => user.gmail)
    .indexOf(gmailContext);

  const handleClickInput = (event: any) => {
    setIsPopupHidden(false);
    setInputType(event.target.parentNode.childNodes[0].placeholder);
  };

  const handleValueChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleOnClick = () => {
    setIsPopupHidden(true);
  };

  const handleSubmit = () => {
    users[indexOfUser][inputType] = inputValue;
    localStorage.setItem("user", JSON.stringify(users));
    handleOnClick();
  };

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
          <Input
            placeholder={"login"}
            type={"text"}
            isDisabled
            isEditable
            onClick={handleClickInput}
            value={users[indexOfUser].login}
            pattern={"[a-zA-Z0-9]{4,16}"}
          />
          <Input
            placeholder={"password"}
            type={"text"}
            isDisabled
            isEditable
            onClick={handleClickInput}
            value={users[indexOfUser].password}
          />
          <Input
            placeholder={"gmail"}
            type={"email"}
            isDisabled
            value={users[indexOfUser].gmail}
            pattern={"[a-z0-9]+@[a-z]+.[a-z]{2,3}"}
          />
        </div>
      </div>
      {(() => {
        if (isPopupHidden) {
        } else {
          return (
            <Popup
              inputType={inputType}
              indexOfUser={indexOfUser}
              handleOnClick={handleOnClick}
              handleValueChange={handleValueChange}
              handleSubmit={handleSubmit}
              initialState={inputValue}
            />
          );
        }
      })()}
    </div>
  );
};

export default Profile;
