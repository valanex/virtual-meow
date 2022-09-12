import React, { useEffect } from "react";

function PetAge(props) {
    let petAge = props.petAge;

    // Variable placeholder for game timer.

    // Increases the pet's age by 1 per in-game day while the pet is alive, determined by the game speed in milliseconds. 
    useEffect(() => {
        let gameTime = "";
        if(props.pet.health>0) {
            console.log("Timer running")
            gameTime = setTimeout(()=>props.setPetAge(props.petAge +1), props.gameSpeed)
        } else {
            console.log("Timer stopped: pet died.")
            clearTimeout(gameTime);
        }
        return () => clearTimeout(gameTime);
    }, [petAge]);

    // useEffect(() => {
    //     if(props.stopTime) {
    //         console.log("Timer stopped: pet is alive, game reset")
    //         clearTimeout(gameTime);
    //     }
    // }, [props.stopTime])

    // Processes changes for each in-game day.
    useEffect(() => {
        // Decrease health per day
        props.adjustStat("health", -4);

        // Increase hunger per day
        props.adjustStat("hunger", -6);

        // Decrease happiness by a random amount (between 0 and 15) per day
        let randomHappDecrease = 0 - Math.floor(Math.random()*15);
        props.adjustStat("happiness", randomHappDecrease);

        // Fetch first event of the game.
            // console.log(`Today is ${petAge}. The last event was on day ${props.eventDate} and the next event is ${props.nextEvent} days after the last.`)
        if(props.pet.isAlive && petAge === props.nextEvent + props.eventDate) {
            props.getNewEvent();
        }

    }, [petAge])


    return (
        <h2>{props.petAge} {props.petAge===1 ? "day" : "days"} old</h2>
    )
}

export default PetAge;