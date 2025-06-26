import React from 'react';
import './App.css';
import Homepage from './My components/homepage'; 
import Header from './My components/header';

function Component({ name }) {
  return <span>{name}</span>;
}

function App() {
  return (
    <div>
      <Header />
      <Homepage />
    </div>
  );
}

export default App;
