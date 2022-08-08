import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";

import SignUp from "./modules/SignIn/SignIn";
import SignIn from "./modules/SignUp/SignUp";
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
            </Routes>
        </div>
  );
}

export default App;
