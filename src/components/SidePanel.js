import React from "react";
import StatBar from "./StatBar";


function SidePanel(props) {
    const pet = props.pet;
    
    return (
        <div className="Side-panel">
            <p>Hi, my name is</p>
            <h2>{pet.name}</h2>
            <p>and I am now</p>
            <h2>{pet.age} {pet.age===1 ? "day" : "days"} old</h2>
            <StatBar statName="Health" />
            
            <StatBar statName="Hunger" />
            <StatBar statName="Happiness" />
            <button style={{backgroundColor: '#474747'}}>Settings</button>
        </div>
    );
}

export default SidePanel;