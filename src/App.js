import React from 'react';
// import Components
import Nav from './components/Nav';
import Hero from './components/Hero';
import Experience from './components/Experience';

// import Styling
import './styles/styles.scss'


function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Experience />
    </div>
  );
}

export default App;