import React, { useState } from "react";
import SidePanel from "./components/SidePanel";
import MainPanel from "./components/MainPanel";

import './App.css';

function App() {
  const [hideMenu, setHideMenu] = useState(false)
  const [pet, setPet] = useState({
    name: "Meower",
    age: 43,
    health: 70,
    hunger: 30,
    happiness: 70
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Virtual Meower</h1>
      </header>
      <main className="App-main">
        <SidePanel pet={pet} setPet={setPet} hideMenu={hideMenu} setHideMenu={setHideMenu} />
        <MainPanel petName={pet.name} />
      </main>
      <footer className="App-footer">
        <p>created using React<br />by Angela Sun, 2022</p>
      </footer>
    </div>
  );
}

export default App;
