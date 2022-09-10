import React, { useEffect } from "react";

function EventWindow(props) {
    const event = props.event;

    // Fetches an event from the Virtual Pet Events API.
    // useEffect(() => {
    //     console.log("Event data fetched!")
    //     fetch(`http://www.virtual-pet.uk/v1/event`)
    //         .then(res => res.json())
    //         .then(data => props.setEvent(data))
    // }, [props.eventCount]);

    // Each time a new event is fetched, updates stats as prescribed by the event's impact.
    useEffect(() => {
        props.adjustStat("health", event.impact.health)
        props.adjustStat("hunger", event.impact.hunger)
        props.adjustStat("happiness", event.impact.happiness)
    }, [event])

    return (
        <div className="Event-window">
            <p><span>{event.type}</span>: {event.title}</p>
            <p>{event.description}</p>
            <p>Health {event.impact.health>0 ? "+" : ""}{event.impact.health}, 
                Hunger {event.impact.hunger>0 ? "+" : ""}{event.impact.hunger}, 
                Happiness {event.impact.happiness>0 ? "+" : ""}{event.impact.happiness}</p>
        </div>
    );
}

export default EventWindow;