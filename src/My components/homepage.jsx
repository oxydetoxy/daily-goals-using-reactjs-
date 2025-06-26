import React, { useState } from 'react';

const inputStyle = {
  padding: '10px',
  fontSize: '16px',
  borderRadius: '4px',
  border: 'solid 4px red',
  width: '200px',
};

const buttonStyle = {
  marginTop: '10px',
  border: 'solid 2px black',
  padding: '1rem',
  width: '50px',
  cursor: 'pointer',
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const Homepage = () => {
  const [inputValue, setInputValue] = useState(0);

  const increment = () => {
    setInputValue(inputValue + 1);
  };

  const decrement = () => {
    setInputValue(inputValue - 1);
  };

  const changeHandler = (e) => {
    const newValue = Number(e.target.value);
    setInputValue(newValue);
    console.log(newValue);
  };
  

  return (
    <div style={containerStyle}>
      <input
        style={inputStyle}
        type="number"
        value={inputValue}
        onChange={changeHandler}
      />
      <div>
        <button style={buttonStyle} type="button" onClick={increment}>+</button>
        <button style={buttonStyle} type="button" onClick={decrement}>-</button>
      </div>
    </div>
  );
};

export default Homepage;
