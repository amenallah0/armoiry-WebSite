import React from 'react';
import Routing from './router'
import AppBar from './Components/Navbar/Navbar';
import './App.css';


function App() {
  return (
    <div>
      <AppBar />
      <Routing />
    </div>
  );
}

export default App;
