import React, { useState } from 'react';

function Contador() {
  // Define o estado inicial do contador como 0
  const [count, setCount] = useState(0);

  // Função para incrementar o contador
  const increment = () => {
    setCount(count + 1);
  };

  // Função para decrementar o contador
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Contador</h2>
      <p>Valor do contador: {count}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
}

export default Contador;
