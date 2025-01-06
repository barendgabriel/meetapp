import React, { useState } from 'react';
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

  const handleAuthorizeClick = async () => {
    try {
      // Fetch the authorization URL from the backend
      const response = await fetch('https://your-backend-url.com/get-auth-url');
      const data = await response.json();
      // Redirect user to the Google OAuth URL directly using fetched authUrl
      window.location.href = data.authUrl;
    } catch (error) {
      console.error('Error getting auth URL:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Display the greeting message */}
        <h1>{greeting}</h1>
        <p>Welcome to Meet App!</p>
        {/* Button to trigger Google OAuth */}
        <button onClick={handleAuthorizeClick}>Authorize with Google</button>
      </header>
    </div>
  );
}

export default App;
