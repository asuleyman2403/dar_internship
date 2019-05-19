import React, { Component }  from 'react';
import './App.css';
import AddTodo from './AddTodo/AddTodo';
import TodoList from './TodoList/TodoList';
class  App extends Component{
    render(){
        return(
            <div className="App__wrapper" >
                <AddTodo />
                <TodoList/>
            </div>
        );
    }
}

export default App;
