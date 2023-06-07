import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let info: {
    officeId: number;
    isOpened: boolean;
    contacts: {
      phone: string;
      email: string;
      address: {
        city: string;
      };
    };
  };

  const user = {
    officeId: 45,
    isOpened: false,
    contacts: {
      phone: '+38090000000',
      email: 'my@gmail.com',
      address: {
        city: 'NewYork'
      }
    }
  };

  // info = user;





  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
