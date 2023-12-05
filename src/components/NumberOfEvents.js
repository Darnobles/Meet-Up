import { useState } from 'react';

const NumberOfEvents = ({allLocations, setCurrentCity}) => {

    const [number, setNumber] = useState(32);

    const handleInputChanged = (event) => {
        const value = event.target.value;
        setNumber(value);
    }

    const handleInputChange = (event) => {
        const value = event.target.value;
        this.setState({
        eventNumber: value
        });
        this.props.updateEvents(undefined, value);
        }

    const handleNumberChange = (event) => {
        handleInputChanged(event);
        handleInputChange(event);
    };

    return(
        <div>
            <label htmlFor="number-of-events-input">Number of Events:</label>
            <input
             type="text"
             id="number-of-events-input"
             className="number-of-events-input"
             value={number}
             onChange={handleNumberChange}
            />
        </div>
    )

}

export default NumberOfEvents;