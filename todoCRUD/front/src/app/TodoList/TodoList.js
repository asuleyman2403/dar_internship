import React, {Component} from 'react';
import { connect } from "react-redux";
import { getTasks } from "../../actions/todo.action";
import './TodoList.css';
import TodoElement from "./TodoElement/TodoElement";
class TodoList extends Component {

    componentDidMount() {
        this.props.getTasks();
    }

    render() {
        const { tasks } = this.props.tasks;
        return (
            tasks && tasks.length ? (

                <div className="tasks">
                    {

                        tasks.map( (task, index) =>
                            <TodoElement key = { index } task = { task }/>
                        )
                    }
                </div>
            ) : (
                <div>No tasks yet!</div>
            )
        );
    }
}

function mapStateToProps(state){
    return{
        tasks: state.tasks
    }
}

export default connect(mapStateToProps, { getTasks })(TodoList);
