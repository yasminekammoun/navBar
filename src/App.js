import React from 'react';
import './App.css';
import NavBar from './NavBar'
const info = [
  {name: "Home", active: true, link: "#home"},
  {name:"Services", active: false, link: "#Services", dropDown: ['For entrepreneurs', 'For students', 'For hobbyists']},
  {name: 'Contact', active: false, link: "#Contact"}

]

function App() {
  return (
    <div>
    <NavBar data={info} />
    </div>
  );
}

export default App;
