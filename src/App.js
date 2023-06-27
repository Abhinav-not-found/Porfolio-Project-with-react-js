import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { Routes,Route } from 'react-router-dom';
import Contact from './components/Contacts/Contact';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element = {<Home></Home>}/>
        <Route path='/About' element={<h1>Underdevelopment</h1>}/>
        <Route path='/Contact' element = {<Contact></Contact>}/>
      </Routes>
    </div>
  );
}

export default App;
