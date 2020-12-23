import logo, { ReactComponent } from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';


function App() {
  return (
    <React.Fragment>
    <NavBar/>
    <main classname="container">
      <Counters/>
    </main>
    </React.Fragment>
  );
}

export default App;
