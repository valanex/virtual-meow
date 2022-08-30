import React, { useState } from "react";
import './App.css';
import SidePanel from "./components/SidePanel"
import MainPanel from "./components/MainPanel"

function App() {
  const [pet, setPet] = useState({
    name: "Meower",
    age: 0,
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
        <SidePanel 
          pet = {pet} />
        <MainPanel petName={pet.name} />
      </main>
      <footer className="App-footer">
        <p>created using React<br />by Angela Sun, 2022</p>
      </footer>
    </div>
  );
}

export default App;
