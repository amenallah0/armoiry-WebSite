import React from "react";
import {Routes,Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProduitHomme from "./Pages/ProduitHomme";
import ProduitFemme from "./Pages/ProduitFemme";
import SignUp from './Components/Sign Up/SignUp'

function App(){

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />  
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/ProduitFemme" element={<ProduitFemme />} />
            <Route path="/ProduitHomme" element={<ProduitHomme />} />
        </Routes>
    )
}

export default App;