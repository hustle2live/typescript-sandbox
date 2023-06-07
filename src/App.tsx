/* eslint-disable @typescript-eslint/no-unused-vars */

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
            city: 'NewYork',
         },
      },
   };

   // info = user;

   const cars: string[] = ['honda', 'bmw', 'cadillac', 'audi'];

   for (const car of cars) {
      console.log(car.toUpperCase());
   }

   // taples

   const someArr: [number, string] = [101, 'ggd'];

   const someSecond: readonly [number, string, ...boolean[]] = [
      101,
      'ggd',
      true,
      false,
   ];

   console.log(someArr);

   return (
      <div className="App">
         <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
               Edit <code>src/App.tsx</code> and save to reload.
            </p>
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
