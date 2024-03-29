import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDoList extends Component {
  render() {
    const { tasks } = this.props;

    return (
      <div>
        <h2>Lista de Tarefas</h2>
        <ul>
          {tasks.map((task, index) => (
            <ToDoItem key={index} task={task} />
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDoList;
