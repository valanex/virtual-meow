import React from "react";

function SettingsMenu(props) {
    const pet = props.pet;
    const setPet = props.setPet;

    function handleChange(event) {
        console.log(event.target)
        const {name, value} = event.target
        setPet(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    return (
        <div className="settings settings-menu">
            <p>Pet's name</p>
            <input 
                defaultValue={pet.name} 
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