import React, { createContext, useContext, useState } from 'react';

const ThemeContext = ConstrutorContexto();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemeDisplay() {
  const { theme } = useContext(ThemeContext);

  return <p>O tema atual da aplicação é: {theme}</p>;
}

function App() {
  return (
    <ThemeProvider>
      <div>
        <h2>Exibindo o tema da aplicação</h2>
        <ThemeDisplay />
      </div>
    </ThemeProvider>
  );
}

export default App;
