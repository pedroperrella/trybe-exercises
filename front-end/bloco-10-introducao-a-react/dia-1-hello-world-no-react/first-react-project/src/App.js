// 1- Crie um novo projeto utilizando npx create-react-app nome-app e acesse a pasta nome-app.
// 2- Crie uma lista de tarefas simples.

import React, { Component } from 'react';
import './App.css';

const Tasks = (value) => {
  return (
    <li>{value}</li>
  );
}

const arrTasks = ['Acordar', 'Passear com o cachorro', 'Entregar projeto', 'Reunião', 'Preencher o forms'];

class App extends Component {
  render() {
    return (
      <ol>{ arrTasks.map((task) => Tasks(task)) }</ol>
    );
  }
}

export default App;
