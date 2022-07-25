import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";

import SignUp from "./modules/SignUp/SignUp";
import SignIn from "./modules/SignIn/SignIn";
import NavBar from "./modules/NavBar/NavBar";
import Catalog from "./modules/Catalog/Catalog";
import NotFound from "./modules/NotFound/NotFound";

function App() {
  return (
        <div>
        <Routes>
            <Route path="/main" element={<NavBar />} />
        </Routes>
        <Routes>
            <Route path="/main" element={<Catalog />} />
            <Route path="/" element={<SignUp />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
  );
}

export default App;
