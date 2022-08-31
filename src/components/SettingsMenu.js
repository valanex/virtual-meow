import React from "react";

function SettingsMenu(props) {
    // Assign props as variable to improve readability
    const pet = props.pet;
    const setPet = props.setPet;

    // Sets the pet's name as value entered in the input field, updated per keystroke.
    function handleChange(event) {
        const {name, value} = event.target
        setPet(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    return (
        <div className="settings settings-menu">
            <p>Pet's name</p>
            <input 
                type="text" 
                onChange={handleChange}
                name="name" 
                value={pet.name}>   
            </input>
           
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