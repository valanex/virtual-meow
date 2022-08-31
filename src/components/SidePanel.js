import React from "react";
import StatBar from "./StatBar";
import SettingsMenu from "./SettingsMenu"


function SidePanel(props) {
    const pet = props.pet;
    
    function toggleMenu() {
        props.setHideMenu(!props.hideMenu)
    }

    return (
        <div className="Side-panel">
            <p>Hi, my name is</p>
            <h2>{pet.name}</h2>
            <p>and I am now</p>
            <h2>{pet.age} {pet.age===1 ? "day" : "days"} old</h2>

            <StatBar type="health" statName="Health" />
            <StatBar type="hunger" statName="Hunger" />
            <StatBar type="happiness" statName="Happiness" />

            <button className="settings" onClick={toggleMenu}>Settings</button>
            {props.hideMenu && <SettingsMenu pet={pet} setPet={props.setPet} />}
        </div>
    );
}

export default SidePanel;