import React from 'react';
import './App.css';
import Homepage from './components/homepage'; 
import Header from './components/header';

function Component({ name }) {
  return <span>{name}</span>;
}

function App() {
  return (
    <div className='mainclass' >
      <Header /> 
      <Homepage />
    </div>
  );
}

export default App;
