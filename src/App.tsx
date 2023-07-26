import React from "react";
import { Routes, Route } from "react-router-dom";

import SignUp from "./modules/SignUp/SignUp";
import SignIn from "./modules/SignIn/SignIn";
import Catalog from "./modules/Catalog/Catalog";
import NotFound from "./modules/NotFound/NotFound";
import Statistics from "./modules/Statistics/Statistics";
import FeedBack from "./modules/FeedBack/FeedBack";
import Profile from "./modules/Profile/Profile";
import Test from "./modules/Test/Test";

function App() {
  return (
    <Routes>
      <Route path="/main" element={<Catalog />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="/feedBack" element={<FeedBack />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/test" element={<Test />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
