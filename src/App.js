import React, { useEffect, useState } from "react";
import SidePanel from "./components/SidePanel";
import MainPanel from "./components/MainPanel";
import './App.css';

function App() {
  const [hideMenu, setHideMenu] = useState(false);
  const [eventDate, setEventDate] = useState(0);
  const [petAge, setPetAge] = useState(0);

  // Initializes pet state.
  const [pet, setPet] = useState({
    name: "Meower",
    health: 1,
    hunger: 1,
    happiness: 1,
    isAlive: true
  });

  // Initializes events state.
  const [event, setEvent] = useState({
    title: "meet your new pet",
    type: "New pet",
    description: "Say hello to your new pet! Make sure you keep them fed and healthy.",
    impact: {
      health: 70,
      hunger: 30,
      happiness: 80
    },
    nextEvent: 5,
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

    // Checks if pet's health is 0. If true, it will process the pet's death.
    if(pet.isAlive && pet.health === 0) {
      petDied();
    }
  }

  // DEBUG logs pet object whenever pet state is updated.
  useEffect(() => {
    console.log(pet)
  }, [pet])

  //  Fetches a new event.
  function getNewEvent() {
    console.log("Event data fetched!")
    fetch(`http://www.virtual-pet.uk/v1/event`)
        .then(res => res.json())
        .then(data => setEvent(data))
    setEventDate(petAge)
  }

  // Processes the pet's death.
  function petDied(){
    setPet(prevData => {
      return {
          ...prevData,
          isAlive: false
      }
    });

    setEvent({
      title: "your pet has died",
      type: "Death",
      description: "Your pet's health declined too much and they passed away during the night.",
      impact: {
        health: 0,
        hunger: 100,
        happiness: 0
      },
      nextEvent: 100,
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Virtual Meower</h1>
      </header>
      <main className="App-main">
        <SidePanel 
          hideMenu={hideMenu} 
          setHideMenu={setHideMenu} 
          eventDate={eventDate}
          pet={pet} 
          setPet={setPet} 
          nextEvent={event.nextEvent}
          petAge={petAge} 
          setPetAge={setPetAge} 
          adjustStat={adjustStat} 
          getNewEvent={getNewEvent}
        />
        <MainPanel 
          pet={pet} 
          setPet={setPet} 
          event={event} 
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
