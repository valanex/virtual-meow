import React from "react";

function SettingsMenu(props) {
    // Assign props as variable to improve readability.
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

    // Increases the game speed by reducing the real-time interval of each in-game day by 500ms increments.
    function fasterSpeed() {
        if (props.gameSpeed > 1000) {
            props.setGameSpeed(props.gameSpeed - 500)
        }
    }

    // Slows down the game speed by increasing the real-time interval of each in-game day by 500ms increments.
    function slowerSpeed() {
        if (props.gameSpeed < 5000) {
            props.setGameSpeed(props.gameSpeed + 500)
        }
    }

    // Resets the game.
    function handleResetGame() {
        props.resetGame();
    }
        

    return (
        <div className="settings settings-menu">
            <p>Pet's name</p>
            <input 
                type="text" 
                onChange={handleChange}
                name="name" 
                value={pet.name}
                maxLength={20}>   
            </input>
           
           <p>Game speed (per day)</p>
            <div className="speed-options">
                <button 
                    className="speed-button"
                    onClick={fasterSpeed}
                >-</button>
                <p>{props.gameSpeed} ms</p>
                <button 
                    className="speed-button"
                    onClick={slowerSpeed}
                >+</button>
            </div>

            <button 
                className="reset-button"
                onClick={handleResetGame}
            >RESET GAME</button>
        </div>
    );
}

export default SettingsMenu;