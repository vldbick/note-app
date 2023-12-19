import React, { useState } from 'react';
import Header from '../header/Header';
import './App.css';
import Main from '../main/Main';
import LeftMenu from '../leftMenu/LeftMenu';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <LeftMenu></LeftMenu>
      <Main></Main>
    </div>
  );
}

export default App;
