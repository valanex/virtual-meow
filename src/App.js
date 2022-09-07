import React, { useState, useEffect } from "react";
import SidePanel from "./components/SidePanel";
import MainPanel from "./components/MainPanel";
import './App.css';

function App() {
  const [hideMenu, setHideMenu] = useState(false);
  const [changeEvent, setChangeEvent] = useState(0);
  const [petAge, setPetAge] = useState(0);

  // Initializes pet state.
  const [pet, setPet] = useState({
    name: "Meower",
    health: 70,
    hunger: 30,
    happiness: 80
  });

  // Initializes events state.
  const [event, setEvent] = useState({
    title: "",
    type: "",
    description: "",
    impact: 0,
    nextEvent: 2,
  });

  // Fetches an event from the Virtual Pet Events API.
  useEffect(() => {
    console.log("Event data fetched!")
    fetch(`http://www.virtual-pet.uk/v1/event`)
      .then(res => res.json())
      .then(data => setEvent(data))
  }, [changeEvent]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Virtual Meower</h1>
      </header>
      <main className="App-main">
        <SidePanel pet={pet} setPet={setPet} hideMenu={hideMenu} setHideMenu={setHideMenu} petAge={petAge} setPetAge={setPetAge} />
        <MainPanel pet={pet} setPet={setPet} event={event} />
      </main>
      <footer className="App-footer">
        <p>created using React<br />by Angela Sun, 2022</p>
      </footer>
    </div>
  );
}

export default App;
