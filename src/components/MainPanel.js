import React from "react";
import HappyMeow from "../assets/happymeow.gif";
import SadMeow from "../assets/sadmeow.gif";
import DeadMeow from "../assets/deadmeow.gif"
import EventWindow from "./EventWindow"
import InteractButtons from "./InteractButtons"

function MainPanel(props) {

    // Determines which sprite to display.
    let meowSprite = ""
    if(props.pet.isAlive) {
        if(props.pet.health>40 && props.pet.hunger<65 && props.pet.happiness>30) {
            meowSprite = HappyMeow;
        } else {
            meowSprite = SadMeow;
        }
    } else {
        meowSprite = DeadMeow;
    }

    return (
        <div className="Main-panel">
            <img src={meowSprite} alt="A happy meower"></img>
            <EventWindow 
                eventCount={props.eventCount}
                event={props.event} 
                adjustStat={props.adjustStat} 
            />
            <InteractButtons 
                pet={props.pet} 
                setPet={props.setPet} 
                adjustStat={props.adjustStat} 
            />
        </div>
    );
}

export default MainPanel;