import React from "react"

function InteractButtons(props) {

    return (
        <div className="Button-cont">
            <button 
                className="bg-health" 
                onClick={()=> {
                    if(props.pet.hunger>70 || props.pet.happiness<30) {
                        props.adjustStat("health", 12)
                    } else {
                        props.adjustStat("health", 20)
                    }
                }}
                disabled={!props.pet.isAlive}
            >Clean</button>

            <button 
                className="bg-hunger" 
                onClick={()=> {
                    if(props.pet.happiness<30) {
                        props.adjustStat("hunger", 9)
                    } else {
                        props.adjustStat("hunger", 15)
                    }
                }}
                disabled={!props.pet.isAlive}
            >Feed</button>

            <button 
                className="bg-happiness" 
                onClick={()=> {
                    if(props.pet.hunger>70) {
                        props.adjustStat("happiness", 8)
                    } else {
                        props.adjustStat("happiness", 15)
                    }
                }} 
                disabled={!props.pet.isAlive}
            >Play</button>
        </div>
    );
}

export default InteractButtons;