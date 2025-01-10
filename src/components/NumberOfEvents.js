import { useState } from 'react';
import React from 'react';

const NumberOfEvents = ({ setCurrentNOE }) => {
  const [eventNumber, setEventNumber] = useState('32');

  const handleInputChanged = (event) => {
    const value = event.target.value;
    //const parsedValue = parseInt(value, 10);
    setEventNumber(value);
    setCurrentNOE(value);
  };

  return (
    <div id="numberOfEvents">
      <label htmlFor="numberOfEventsInput">Number of Events</label>
      <input
        type="text"
        id="numberOfEventsInput"
        value={eventNumber}
        onChange={handleInputChanged}
      />
    </div>
  );
};
export default NumberOfEvents;
