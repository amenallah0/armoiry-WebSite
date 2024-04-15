import React from 'react';

import AppBar from './Components/Navbar/Navbar';
import Cards from './Components/Cards/Card';
import Items from './Components/Cards/Item';
import Comment from './Components/Cards/Comments';

function App() {
  return (
    <div>
      <AppBar />
      <Cards />
      <Items />
      <Comment />
    </div>
  );
}

export default App;
