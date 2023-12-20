import React from 'react';

import './App.css';
import General from '../general/General';
import RightMenu from '../rightMenu/RightMenu';
import Summary from '../summaryTable/Summary';


function App() {

  return (
    <div className="App">
      <General></General>
      <RightMenu></RightMenu>
      <Summary></Summary>
    </div>
  );
}

export default App;
