import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Profile.module.css";
import NavBar from "../NavBar/NavBar";
import Input from "../../components/Input/Input";
import getter from "../../utils/localStorage/getter";
import { Popup } from "./Popup/Popup";
import Fox from "../../images/icons/Fox.svg";
import Logout from "../../images/icons/Logout.svg";
import routes from "../../services/routes";
import Edit from "../../images/icons/Edit.svg";

const Profile = () => {
  const [inputType, setInputType] = useState("");
  const [isPopupHidden, setIsPopupHidden] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const users = getter();
  const currentUser = sessionStorage.getItem("currentUser");

  const indexOfUser = users
    .map((user: { gmail: string }) => user.gmail)
    .indexOf(currentUser);

  const handleClickInput = (event: any) => {
    setIsPopupHidden(false);
    setInputType(event.target.parentNode.childNodes[0].placeholder);
  };

  const handleValueChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handlePopupClose = () => {
    setInputValue("");
    setIsPopupHidden(true);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const f_users = [...users];
    f_users[indexOfUser][inputType] = inputValue;
    localStorage.setItem("user", JSON.stringify(f_users));
    handlePopupClose();
  };

  return (
    <>
      <NavBar />
      <div className={styles.toCentre}>
        <div className={styles.profile}>
          <div className={styles.generalInf}>
            <img className={styles.fox} src={Fox} alt={"Fox icon"} />
            <div>
              <h2>{users[indexOfUser].login}</h2>
              <p>{users[indexOfUser].gmail}</p>
            </div>
            <Link to={routes.authorisation} className={styles.logout}>
              <img src={Logout} alt={"Exit icon"} />
            </Link>
          </div>
          <div className={styles.inputs}>
            <div className={styles.editable}>
              <Input
                placeholder={"login"}
                type={"text"}
                isDisabled
                value={users[indexOfUser].login}
                pattern={"[a-zA-Z0-9]{4,16}"}
              />
              <img
                className={styles.img}
                src={Edit}
                alt={"Edit Icon"}
                onClick={handleClickInput}
              />
            </div>
            <div className={styles.editable}>
              <Input
                placeholder={"password"}
                type={"text"}
                isDisabled
                value={users[indexOfUser].password}
              />
              <img
                className={styles.img}
                src={Edit}
                alt={"Edit Icon"}
                onClick={handleClickInput}
              />
            </div>
            <Input
              placeholder={"gmail"}
              type={"email"}
              isDisabled
              value={users[indexOfUser].gmail}
              pattern={"[a-z0-9]+@[a-z]+.[a-z]{2,3}"}
            />
          </div>
        </div>
      </div>
      {isPopupHidden ? (
        <></>
      ) : (
        <div className={styles.popup}>
          <Popup
            inputType={inputType}
            indexOfUser={indexOfUser}
            handleOnClick={handlePopupClose}
            handleValueChange={handleValueChange}
            handleSubmit={handleSubmit}
            initialState={inputValue}
          />
        </div>
      )}
    </>
  );
};

export default Profile;
