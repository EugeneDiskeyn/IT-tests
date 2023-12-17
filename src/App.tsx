import React, { createContext, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import SignUp from "./modules/SignUp/SignUp";
import SignIn from "./modules/SignIn/SignIn";
import Catalog from "./modules/Catalog/Catalog";
import NotFound from "./modules/NotFound/NotFound";
import FeedBack from "./modules/FeedBack/FeedBack";
import Profile from "./modules/Profile/Profile";
import TestList from "./modules/TestList/TestList";
import routes from "./services/routes";
import NavBar from "./modules/NavBar/NavBar";
import Test from "./modules/TestList/Test/Test";
import TestAnswers from "./modules/TestList/Test/TestAnswers/TestAnswers";

export const MailContext: any = createContext("user@gmail.com");

export const App = () => {
  const [mailContext, setMailContext] = useState("user@gmail.com");

  return (
    <MailContext.Provider value={[mailContext, setMailContext]}>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={routes.authorisation} replace />}
        />
        <Route path={routes.catalog} element={<Catalog />} />
        <Route path={routes.feedback} element={<FeedBack />} />
        <Route path={routes.profile} element={<Profile />} />
        <Route path={routes.authorisation} element={<SignIn />} />
        <Route path={routes.registration} element={<SignUp />} />
        <Route path={routes.test} element={<NavBar />}>
          <Route path={routes.names} element={<TestList />} />
          <Route path={routes.testId} element={<Test />} />
          <Route path={routes.answers} element={<TestAnswers />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MailContext.Provider>
  );
};
