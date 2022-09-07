import React, { useState } from "react";
import StatBar from "./StatBar";
import SettingsMenu from "./SettingsMenu";
import PetAge from "./PetAge";

function SidePanel(props) {
    // Initializes state for game speed
    const [gameSpeed, setGameSpeed] = useState(3000);

    // Assign props as variable to improve readability
    const pet = props.pet;
    
    // Toggles the hideMenu boolean 
    function toggleMenu() {
        props.setHideMenu(!props.hideMenu)
    }

    return (
        <div className="Side-panel">
            {/* Pet's name. Set by the input field in SettingsMenu component. */}
            <p>Hi, my name is</p>
            <h2>{pet.name}</h2>

            {/* Pet's age. Each day of age is an interval in ms set by the gameSpeed, adjustable in the SettingsMenu component. */}
            <p>and I am now</p>
            <PetAge petAge={props.petAge} setPetAge={props.setPetAge} gameSpeed={gameSpeed} />

            {/* Status bars to display pet's stats. */}
            <StatBar type="health" statName="Health" statDisplay={pet.health} />
            <StatBar type="hunger" statName="Hunger" statDisplay={pet.hunger} />
            <StatBar type="happiness" statName="Happiness" statDisplay={pet.happiness} />

            {/* Settings button. Clicking toggles the hideMenu boolean (state in App.js), which will either hide or show the SettingsMenu. */}
            <button className="settings" onClick={toggleMenu}>Settings</button>
            {props.hideMenu && <SettingsMenu pet={pet} setPet={props.setPet} gameSpeed={gameSpeed} setGameSpeed={setGameSpeed} />}
        </div>
    );
}

export default SidePanel;