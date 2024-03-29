import React, { useState } from 'react';

const InputComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Digite algo..."
      />
      <p>O valor do campo de entrada é: {inputValue}</p>
    </div>
  );
};

export default InputComponent;
