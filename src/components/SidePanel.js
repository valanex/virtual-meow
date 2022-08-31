import React from "react";
import StatBar from "./StatBar";
import SettingsMenu from "./SettingsMenu"


function SidePanel(props) {
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

            {/* Pet's age. Each day of age is set by the timer in SettingsMenu component. */}
            <p>and I am now</p>
            <h2>{pet.age} {pet.age===1 ? "day" : "days"} old</h2>

            {/* Status bars to display pet's stats. */}
            <StatBar type="health" statName="Health" statDisplay={pet.health} />
            <StatBar type="hunger" statName="Hunger" statDisplay={pet.hunger} />
            <StatBar type="happiness" statName="Happiness" statDisplay={pet.happiness} />

            {/* Settings button. Clicking toggles the hideMenu boolean (state in App.js), which will either hide or show the SettingsMenu. */}
            <button className="settings" onClick={toggleMenu}>Settings</button>
            {props.hideMenu && <SettingsMenu pet={pet} setPet={props.setPet} />}
        </div>
    );
}

export default SidePanel;