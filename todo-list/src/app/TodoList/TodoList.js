import React, {Component} from 'react';
import {connect} from "react-redux";
import TodoElement from "./TodoElement/TodoElement";

class TodoList extends Component {

    render() {
        return (
            <div>
                {
                    this.props.list.map( (item, index) => {
                        return <TodoElement
                            key={index}
                            index={index}
                            todo={item}
                        />
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = store => {
    const { todo } = store;
    return todo;
};

export default connect(mapStateToProps, null)(TodoList);
