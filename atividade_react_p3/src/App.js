import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeScreen from './Componentes/Home';
import CadastroScreen from './Componentes/Cadastro';
import PerfilScreen from './Componentes/Perfil';
import CadastroProduto from './Componentes/FormCadastroProdutos';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/cadastro" component={CadastroScreen} />
        <Route path="/perfil" component={PerfilScreen} />
        <Route path="/cadastro-produto" component={CadastroProduto} /> {/* Rota para o formulário de cadastro de produtos */}
      </Switch>
    </Router>
  );
};

export default App;
