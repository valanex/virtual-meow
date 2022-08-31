import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'


function StatBar(props) {
    return (
        <div className="Stat-bar">
            <h2>{props.statName}</h2>
            <ProgressBar 
                now={props.statDisplay} 
                variant={props.type} 
                min={0} 
                max={100} />       
        </div>
    );
}

export default StatBar;