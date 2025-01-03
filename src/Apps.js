import React from 'react';
import './App.css';

function App() {
  // Optional: You can add a dynamic greeting with the current time
  const hour = new Date().getHours();
  let greeting;

  if (hour < 12) {
    greeting = 'Good Morning!';
  } else if (hour < 18) {
    greeting = 'Good Afternoon!';
  } else {
    greeting = 'Good Evening!';
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* You can replace the logo and other content */}
        <h1>{greeting}</h1> {/* Display the greeting */}
        <p>Welcome to my React app!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
