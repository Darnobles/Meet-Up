import { useState } from 'react';

const NumberOfEvents = ({allLocations, setCurrentCity, updateEvents, setErrorAlert}) => {

    const [number, setNumber] = useState(32);

    const handleInputChanged = (event) => {
        const value = event.target.value;
        setNumber(value);

        let ErrorAlert;
      if (value <= 0 || value == "" ) {
        ErrorAlert = "Please enter valid number"
      } else {
        ErrorAlert = ""
      }
      setErrorAlert(ErrorAlert);
    }

    const handleInputChange = (event) => {
        const value = event.target.value;
        setNumber(value);
        updateEvents(undefined,value);
        };

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