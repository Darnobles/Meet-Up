import { useState } from "react";

const Event = ({event}) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
    <div>
        <li className="event">
            <h2>{event && event.summary}</h2>
            <p>{event && event.location}</p>
            <p>{event && (new Date(event.created)).toUTCString()}</p>
            {showDetails ?
                <p classsName="details">{event && event.description}</p>:null
            }
            <p>{event && event.time !== undefined ? event.time: 'No time available'}</p>
        
        <button className="details-btn" onClick={() => {
            showDetails ? setShowDetails(false) : setShowDetails(true)
        }}>{showDetails ? "hide details" : "show details"}</button>
        </li>
    </div>
    );
}

export default Event;