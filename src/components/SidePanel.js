import React, { useState } from "react";
import StatBar from "./StatBar";
import SettingsMenu from "./SettingsMenu"


function SidePanel(props) {
    const pet = props.pet;
    const [hideMenu, setHideMenu] = useState(false)
    
    function toggleMenu() {
        setHideMenu(!hideMenu)
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
            {hideMenu && <SettingsMenu />}
        </div>
    );
}

export default SidePanel;