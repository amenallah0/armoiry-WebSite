import React from 'react';
import Routing from './router'
import AppBar from './Components/Navbar/Navbar';
import './App.css';
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>

      <AppBar />
      <Routing />
      </BrowserRouter>
  );
}

export default App;
