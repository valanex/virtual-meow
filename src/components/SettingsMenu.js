import React from "react";

function SettingsMenu() {
    return (
        <div className="settings settings-menu">
            <p>Pet's name</p>
            <input></input>
           
           <p>Game speed (per day)</p>
            <div className="speed-options">
                <button className="speed-button">-</button>
                <p>1000 ms</p>
                <button className="speed-button">+</button>
            </div>
            
            <button className="reset-button">RESET GAME</button>
        </div>
    );
}

export default SettingsMenu;