import React, { useEffect, useState } from "react";
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

  // Takes two parameters: the attribute to be affected and the amount (positive or negative) that the attribute will be changed by.
  function adjustStat(attribute, statChange) {
        
    // newStat is a placeholder variable to store the attribute's new value before being written into state.
    let newStat = 0;

    // Calculates the new value for the relevant attribute and stores the number in newStat.
    if (attribute === "health") {
        newStat = pet.health + statChange;
    } else if (attribute === "hunger") {
        newStat = pet.hunger + statChange;
    } else if (attribute === "happiness") {
        newStat = pet.happiness + statChange;
    }

    // Processes newStat to lock stats to a range between 0 and 100.
    if(newStat > 100) {
        newStat = 100;
    } else if (newStat < 0) {
        newStat = 0;
    }

    // Sets the new value in pet state by adding in all existing properties and finally overwriting the relevant attribute (stat) with the new value.
    setPet(prevData => {
      return {
          ...prevData,
          [attribute]: newStat
      }
    })
  }

  // DEBUG logs pet object whenever pet state is updated.
  useEffect(() => {
    console.log(pet)
  }, [pet])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Virtual Meower</h1>
      </header>
      <main className="App-main">
        <SidePanel 
          pet={pet} 
          setPet={setPet} 
          hideMenu={hideMenu} 
          setHideMenu={setHideMenu} 
          petAge={petAge} 
          setPetAge={setPetAge} 
          adjustStat={adjustStat} 
        />
        <MainPanel 
          pet={pet} 
          setPet={setPet} 
          event={event} 
          setEvent={setEvent} 
          adjustStat={adjustStat} 
        />
      </main>
      <footer className="App-footer">
        <p>developed in React<br />by Angela Sun, 2022</p>
      </footer>
    </div>
  );
}

export default App;
