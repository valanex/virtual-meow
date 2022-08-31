import React from "react"

function InteractButtons(props) {

    function handleClick(stat) {
        // newStat is a placeholder variable to store the stat's new value before being written into state.
        let newStat = 0;
        if (stat === "health") {
            newStat = props.pet.health + 70;
        } else if (stat === "hunger") {
            newStat = props.pet.hunger - 60;
        } else if (stat === "happiness") {
            newStat = props.pet.happiness + 25;
        }

        // Locks stats to a range between 0 and 100.
        if(newStat > 100) {
            newStat = 100;
        } else if (newStat < 0) {
            newStat = 0;
        }

        console.log(stat + " is now " + newStat);

        // Sets the new value in pet state by adding in all existing properties and finally overwriting the relevant property (stat) with the new value.
        props.setPet(prevData => {
            return {
                ...prevData,
                [stat]: newStat
            }
        })
    }

    return (
        <div className="Button-cont">
            <button 
                className="bg-health" 
                onClick={()=>handleClick("health")}
            >Clean</button>

            <button 
                className="bg-hunger" 
                onClick={()=>handleClick("hunger")}
            >Feed</button>

            <button 
                className="bg-happiness" 
                onClick={()=>handleClick("happiness")}
            >Play</button>
        </div>
    );
}

export default InteractButtons;