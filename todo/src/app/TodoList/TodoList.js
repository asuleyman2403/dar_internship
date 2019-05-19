import React, { Component, Fragment } from 'react';

import TodoElement from './TodoElement/TodoElement';

class TodoList extends Component {
    render() {
        const { list, handleEditTodo, handleDeleteTodo } = this.props;

        return (
            <Fragment>
                {
                    list.map( (t, index) => (
                        <TodoElement 
                            handleEditTodo={handleEditTodo} 
                            handleDeleteTodo={handleDeleteTodo}
                            key={index} 
                            index={index} 
                            todo={t} 
                        />
                    ) )
                }
            </Fragment>
        );
    }
}

export default TodoList;