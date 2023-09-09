import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import SignUp from "./modules/SignUp/SignUp";
import SignIn from "./modules/SignIn/SignIn";
import Catalog from "./modules/Catalog/Catalog";
import NotFound from "./modules/NotFound/NotFound";
import Statistics from "./modules/Statistics/Statistics";
import FeedBack from "./modules/FeedBack/FeedBack";
import Profile from "./modules/Profile/Profile";
import TestList from "./modules/TestList/TestList";
import routes from "./services/routes";
import NavBar from "./modules/NavBar/NavBar";
import Test from "./modules/TestList/Test/Test";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={routes.authorisation} replace />}
      />
      <Route path={routes.catalog} element={<Catalog />} />
      <Route path={routes.statistics} element={<Statistics />} />
      <Route path={routes.feedback} element={<FeedBack />} />
      <Route path={routes.profile} element={<Profile />} />
      <Route path={routes.authorisation} element={<SignIn />} />
      <Route path={routes.registration} element={<SignUp />} />
      <Route path={routes.test} element={<NavBar />}>
        <Route path={":names"} element={<TestList />} />
        <Route path={":names/:testId"} element={<Test />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
