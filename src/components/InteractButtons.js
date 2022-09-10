import React from "react"

function InteractButtons(props) {

    return (
        <div className="Button-cont">
            <button 
                className="bg-health" 
                onClick={()=>props.adjustStat("health", 20)}
            >Clean</button>

            <button 
                className="bg-hunger" 
                onClick={()=>props.adjustStat("hunger", -15)}
            >Feed</button>

            <button 
                className="bg-happiness" 
                onClick={()=>props.adjustStat("happiness", 15)}
            >Play</button>
        </div>
    );
}

export default InteractButtons;