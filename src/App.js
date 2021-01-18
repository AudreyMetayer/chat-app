import logo from './logo.svg';
import React from 'react';
import './App.css';
import './components/Contact';
import Contact from './components/Contact';

function App() {
  return (
      <div className="App">
          <Contact
              name="Lana Kane"
              avatar="https://i.postimg.cc/WpY1dG61/lana.jpg"
              onlineStatus="online"
          />
          <Contact
              name="Cyril Figgis"
              avatar="https://i.postimg.cc/nrz6DwfV/cyril.jpg"
              onlineStatus=""
          />
          <Contact
              name="Sterling Archer"
              avatar="https://i.postimg.cc/MHkLYg8G/archer.jpg"
              onlineStatus="online"
          />
      </div>
  );
}

export default App;
