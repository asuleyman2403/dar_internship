import React, {Component} from 'react';
import { connect} from "react-redux";
import { createTask} from "../../actions/todo.action";

class AddTodo extends Component {
    state = {
        value: ''
    };

    handleOnChange = e => {
        this.setState({
            value: e.target.value
        })
    };

    handleOnAdd = () => {
        if(this.state.value !== '') {
            this.props.createTask(this.state.value);
            this.setState({
                value: ''
            })
        }else{
            alert('Text of a new task is empty. Please fill it!');
        }
    };

    render() {
        return (
            <div className = "AddTodo">
                <input type="text" value={this.state.value} onChange={this.handleOnChange} className = "AddTodo__input"/>
                <button onClick={this.handleOnAdd} className="AddTodo__button">Add</button>
            </div>
        );
    }
}

export function mapStateToProps(state){
    return{
        tasks: state.tasks
    }
}

export default connect(mapStateToProps, { createTask }) (AddTodo);
