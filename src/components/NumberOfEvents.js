import { useState } from 'react';

const NumberOfEvents = ({updateEvents, setErrorAlert}) => {

    const [number, setNumber] = useState(32);

    const handleInputChanged = (event) => {
        const value = event.target.value;
        setNumber(parseInt(value));

      let errorAlert;

      if (isNaN(value) || parseInt(value) < 1 || parseInt(value) > 32) {
        errorAlert = "Please enter a number between 1-32"
      } else {
        errorAlert = ""
      }

      setErrorAlert(errorAlert);
    };

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