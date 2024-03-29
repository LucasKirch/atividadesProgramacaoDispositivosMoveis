import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext'; // Importe o contexto do tema

const ThemeToggleButton = () => {
  // Use o useContext para acessar o contexto do tema
  const { theme, setTheme } = useContext(ThemeContext);

  // Função de callback para alterar o tema
  const toggleTheme = () => {
    // Altera o tema entre "light" e "dark"
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme}>
      Alterar Tema para {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  );
};

export default ThemeToggleButton;
