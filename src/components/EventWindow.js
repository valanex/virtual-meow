import React, { useEffect } from "react";

function EventWindow(props) {
    const event = props.event;

    // Fetches an event from the Virtual Pet Events API.
    useEffect(() => {
        console.log("Event data fetched!")
        fetch(`http://www.virtual-pet.uk/v1/event`)
            .then(res => res.json())
            .then(data => props.setEvent(data))
    }, []);


    return (
        <div className="Event-window">
            <p>EVENT: {event.title}</p>
            <p>{event.type}</p>
            <p>{event.description}</p>
        </div>
    );
}

export default EventWindow;