import React, { useEffect, useState } from 'react';

const CitySearch = ({ allLocations, setCurrentCity }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    const filteredLocations = allLocations
      ? allLocations.filter((location) => {
          return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        })
      : [];

    setQuery(value);
    setSuggestions(filteredLocations);
  };

  const handleClicked = (suggestion) => {
    //const value = Event.target.textContent;
    setQuery(suggestion);
    setShowSuggestions(false); // to hide the list
    setCurrentCity(suggestion);
  };

  useEffect(() => {
    setSuggestions(allLocations);
  }, [`${allLocations}`]);

  return (
    <div id="city-search">
      <label htmlFor="citysearch">Search for a City</label>
      <input
        type="text"
        id="citysearch"
        className="city"
        placeholder="Search for a city"
        value={query}
        onFocus={() => setShowSuggestions(true)}
        onChange={handleInputChanged}
      />
      {showSuggestions ? (
        <ul className="suggestions">
          {suggestions.map((suggestion) => {
            return (
              <li onClick={() => handleClicked(suggestion)} key={suggestion}>
                {suggestion}
              </li>
            );
          })}
          <li
            key="See all cities"
            onClick={() => handleClicked('See all cities')}
          >
            <b>See all cities</b>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default CitySearch;
