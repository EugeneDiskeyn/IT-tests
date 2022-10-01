import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";

import SignUp from "./modules/SignIn/SignIn";
import SignIn from "./modules/SignUp/SignUp";
import Catalog from "./modules/Catalog/Catalog";
import NotFound from "./modules/NotFound/NotFound";
import Statistics from "./modules/Statistics/Statistics";
import FeedBack from "./modules/FeedBack/FeedBack";
import Profile from "./modules/Profile/Profile";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/main" element={<Catalog />} />
                <Route path="/statistics" element={<Statistics />}/>
                <Route path="/feedBack" element={<FeedBack />}/>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/" element={<SignUp />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </div>
    );
}

export default App;