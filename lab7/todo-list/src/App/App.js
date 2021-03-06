import React from 'react';
import './App.css';
import AddToDo from './AddToDo/AddToDo';
import './AddToDo/AddToDo.css';
import ToDoList from './ToDoList/ToDoList';
import './ToDoList/ToDoList.css';
class App extends React.Component {
  state = {
    todoList: []
  };

  handleAdd = (task) => {
    console.log(task);
      this.setState((state) => ({
        todoList: [task, ...state.todoList]
      }));
  };

  render() {

    return (
    <div className="App">
      <AddToDo onAdd = { this.handleAdd } />
      <ToDoList list = { this.state.todoList }/>
    </div>
    );
  }
}

export default App;
