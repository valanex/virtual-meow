import React, { useState } from "react";
import StatBar from "./StatBar";
import SettingsMenu from "./SettingsMenu";
import PetAge from "./PetAge";

function SidePanel(props) {
    // Initializes state for game speed
    const [gameSpeed, setGameSpeed] = useState(3000);
    
    // Toggles the hideMenu boolean 
    function toggleMenu() {
        props.setHideMenu(!props.hideMenu)
    }

    return (
        <div className="Side-panel">
            {/* Pet's name. Set by the input field in SettingsMenu component. */}
            <p>Hi, my name is</p>
            <h2>{props.pet.name}</h2>

            {/* Pet's age. Each day of age is an interval in ms set by the gameSpeed, adjustable in the SettingsMenu component. */}
            {props.pet.isAlive ? <p>and I am now</p> : <p>and I was</p>}
            <PetAge
                eventDate={props.eventDate}
                nextEvent={props.nextEvent}
                getNewEvent={props.getNewEvent} 
                petAge={props.petAge} 
                setPetAge={props.setPetAge} 
                gameSpeed={gameSpeed} 
                pet={props.pet} 
                adjustStat={props.adjustStat} 
            />

            {/* Status bars to display pet's stats. */}
            <StatBar type="health" statName="Health" statDisplay={props.pet.health} />
            <StatBar type="hunger" statName="Hunger" statDisplay={props.pet.hunger} />
            <StatBar type="happiness" statName="Happiness" statDisplay={props.pet.happiness} />

            {/* Settings button. Clicking toggles the hideMenu boolean (state in App.js), which will either hide or show the SettingsMenu. */}
            <button className="settings" onClick={toggleMenu}>Settings</button>
            {props.hideMenu && 
                <SettingsMenu 
                    pet={props.pet} 
                    setPet={props.setPet} 
                    gameSpeed={gameSpeed} 
                    setGameSpeed={setGameSpeed} 
                    resetGame={props.resetGame}
                />
            }
        </div>
    );
}

export default SidePanel;