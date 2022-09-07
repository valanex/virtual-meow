import React, { useEffect } from "react";

function PetAge(props) {

    // Increases the pet's age by 1 per in-game day, determined by the game speed in milliseconds. 
    useEffect(() => {
        setTimeout(()=>props.setPetAge(props.petAge + 1), props.gameSpeed)
      }, [props.petAge]);
    
    return (
        <h2>{props.petAge} {props.petAge===1 ? "day" : "days"} old</h2>
    )
}

export default PetAge;