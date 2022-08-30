import React from "react";
import HappyMeow from "../assets/happymeow.gif"
import EventWindow from "./EventWindow"
import InteractButtons from "./InteractButtons"

function MainPanel() {
    return (
        <div className="Main-panel">
            <img src={HappyMeow} alt="A happy meower"></img>
            <EventWindow />
            <InteractButtons />
        </div>
    );
}

export default MainPanel;