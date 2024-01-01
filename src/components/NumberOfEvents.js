import { useState } from "react";

const NumberOfEvents = ({ updateEvents, setErrorAlert }) => {
  const [number, setNumber] = useState(32);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setNumber(value);

    let errorAlert = "";
    const parsedValue = parseInt(value, 10);

    if (isNaN(value) || parseInt(value) < 1 || parseInt(value) > 32) {
      errorAlert = "Please enter a number between 1-32";
    }

    setErrorAlert(errorAlert);
    updateEvents(undefined, value);
  };

  return (
    <div>
      <label htmlFor="number-of-events-input">Number of Events:</label>
      <input
        type="text"
        id="number-of-events-input"
        className="number-of-events-input"
        value={number}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default NumberOfEvents;
