import React from "react";
import HappyMeow from "../assets/happymeow.gif";
import EventWindow from "./EventWindow"
import InteractButtons from "./InteractButtons"
function MainPanel(props) {

    return (
        <div className="Main-panel">
            <img src={HappyMeow} alt="A happy meower"></img>
            <EventWindow event={props.event} setEvent={props.setEvent} />
            <InteractButtons pet={props.pet} setPet={props.setPet} adjustStat={props.adjustStat} />
        </div>
    );
}

export default MainPanel;