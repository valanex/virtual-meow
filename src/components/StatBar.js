import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'


function StatBar(props) {
    return (
        <div className="Stat-bar">
            <h2>{props.statName}</h2>
            <ProgressBar now={60} variant={props.type} />       
        </div>
    );
}

export default StatBar;