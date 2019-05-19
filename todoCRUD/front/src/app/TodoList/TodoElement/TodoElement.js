import React, {Component} from 'react';
import { connect } from "react-redux";
import { updateTask, deleteTask } from "../../../actions/todo.action";
import './TodoElement.css';


class TodoElement extends Component {
    state = {
        disabled: true,
        value: this.props.task.task,
        done: this.props.task.done
    };

    componentDidUpdate(prevProps){
        // to avoid infinite loop, set state in condition
        if( this.props.task !== prevProps.task ){
            this.setState({value: this.props.task.task})
        }
    }

    handleEditClick = () => {
        this.setState({
            disabled: false
        })
    };

    handleSaveClick = () => {
        this.props.updateTask(this.props.task.id, this.state.value, this.state.done);
        this.setState({
            disabled: true
        });
    };

    handleOnChange = e => {
        this.setState({
            value: e.target.value
        })
    };

    handleDeleteClick = () => {

        this.props.deleteTask(this.props.task.id);
    };

    handleDoneClick = () => {
        this.setState({
            done: !this.state.done
        });
        this.props.updateTask(this.props.task.id, this.state.value, !this.props.task.done);
    };

    render() {
        const { done } = this.state;
        const { disabled } = this.state;
        return (
            <div className="task">
                <input
                    className={`input ${disabled ? 'input--disabled' : ''} `}
                    value={ this.state.value }
                    disabled={disabled}
                    onChange={this.handleOnChange}
                />
                <div className="TodoElement__actions">
                    { disabled && !done && <button  className="button" onClick={this.handleEditClick}>Edit</button>}
                    { !disabled && !done && <button className="button" onClick={this.handleSaveClick}>Save</button>}
                    <button className="button" onClick={this.handleDeleteClick}>Delete</button>
                    <button className="button" onClick={this.handleDoneClick}>{ done ? 'Undone' : 'Done' }</button>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state){
    return{
        tasks: state.tasks
    }
}
export default connect(mapStateToProps, {
    updateTask,
    deleteTask
})(TodoElement);
