import React from 'react';
import ProductCard from './Componentes/ProductCard';
import Header from './Componentes/Header';
import ToDoList from './Componentes/ToDoList';
import Button from './Componentes/Button';
import Profile from './Componentes/Profile'
import profileImage from './Image/profile.jpg'; // Importe sua imagem de perfil

function App() {
  const handleButtonClick = () => {
    console.log('Botão pressionado!');
  };
  const tasks = ['Tarefa 1', 'Tarefa 2', 'Tarefa 3'];
  return (
    <div>
      <div>
        <Header title="Meu Título" onPress={handleButtonClick} />
      </div>
      <div>
        <Profile
          name="John Doe"
          age={30}
          email="john.doe@example.com"
          profilePicture={profileImage}
        />
      </div>
      <div>
        <ToDoList tasks={tasks} />
      </div>
      <div>
        <Button title="Pressione-me" color="blue" />
        <Button title="Clique aqui" color="red" />
      </div>
      <ProductCard name="Produto A" price="R$ 19,99" />
      <ProductCard name="Produto B" price="R$ 29,99" />
      <ProductCard name="Produto C" price="R$ 9,99" />
    </div>
  );
}

export default App;
