import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserProvider } from './context/UserContext'

// Render App into div element with id root
ReactDOM.render(

  // The App is wrapped with user provider, which manipulates user context along with local storage; through values: user variable and setUserHandler function
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
    
  </React.StrictMode>,
  
  document.getElementById('root')
);
