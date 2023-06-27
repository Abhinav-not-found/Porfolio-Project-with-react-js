import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
// import Contact from './components/Contacts/Contact';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      
      {/* <Contact></Contact> */}
    </div>
  );
}

export default App;
