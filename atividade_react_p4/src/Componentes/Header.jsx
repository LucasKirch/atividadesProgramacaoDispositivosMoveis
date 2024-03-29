import React from 'react';

const Header = ({ title, onPress }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <button onClick={onPress}>Botão</button>
    </div>
  );
};

export default Header;