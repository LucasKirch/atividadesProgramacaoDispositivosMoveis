import React from 'react';

const Button = ({ title, color }) => {
  const handleClick = () => {
    alert(title);
  };

  return (
    <button style={{ backgroundColor: color }} onClick={handleClick}>
      {title}
    </button>
  );
};

export default Button;
