import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Products from "./Pages/Products";

function App(){

    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/Products" element={<Products/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default App;