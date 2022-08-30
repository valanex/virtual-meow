import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'

function StatBar(props) {
    return (
        <div className="Stat-bar">
            <h2>{props.statName}</h2>
            <ProgressBar now={70} />
        </div>
    );
}

export default StatBar;