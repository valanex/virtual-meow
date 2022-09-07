import React from "react";

function EventWindow(props) {
    const event = props.event;
    console.log("Event window rendered!");

    return (
        <div className="Event-window">
            <p>EVENT: {event.title}</p>
            <p>{event.type}</p>
            <p>{event.description}</p>
        </div>
    );
}

export default EventWindow;