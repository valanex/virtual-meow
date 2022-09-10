import React from "react";
import HappyMeow from "../assets/happymeow.gif";
import EventWindow from "./EventWindow"
import InteractButtons from "./InteractButtons"
function MainPanel(props) {

    return (
        <div className="Main-panel">
            <img src={HappyMeow} alt="A happy meower"></img>
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