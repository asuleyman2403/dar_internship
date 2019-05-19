import React, { Component } from 'react';
import { connect} from "react-redux";
import './TodoElement.css';
import { editTodo, deleteTodo, makeDone, saveTodo } from "../../../actions/todo.action";

class TodoElement extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
    }

    componentDidMount(){
        this.setState({value: this.props.todo.text});
    }

    componentDidUpdate(prevProps){
        // to avoid infinite loop, set state in condition
        if( this.props.todo !== prevProps.todo ){
            this.setState({value: this.props.todo.text})
        }
    }


    handleDeleteTodo = () => {
        const { index } = this.props;
        this.props.deleteTodo(index);
    };

    handleEditClick = () => {
        const { index } = this.props;
        this.props.editTodo(index);
    };

    handleSaveClick = () => {
        const { index } = this.props;
        const { value } = this.state;
        this.props.saveTodo(index, value);
    };

    handleDoneClick = () => {
        const { index } = this.props;
        this.props.makeDone(index);
    };

    handleDeleteClick = () => {
        this.handleDeleteTodo();
    };

    handleOnChange = e => {
        this.setState({value : e.target.value});
    };

    render() {

        const { todo } = this.props;
        const { value } = this.state;

        return (
            <div className={`TodoElement ${todo.done ? 'TodoElement--done' : ''} `} >
                <input
                    className={`input ${todo.disabled ? 'input--disabled' : ''} `}
                    value={value}
                    disabled={todo.disabled}
                    onChange={this.handleOnChange}
                />
                <div className="TodoElement__actions" >
                    { todo.disabled && !todo.done && <button onClick={this.handleEditClick} className="button" >Edit</button>}
                    { !todo.disabled && !todo.done && <button className="button" onClick={this.handleSaveClick} >Save</button>}
                    <button className="button" onClick={this.handleDeleteClick} >Delete</button>
                    <button className="button" onClick={this.handleDoneClick} >{ todo.done ? 'Undone' : 'Done' }</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = store => {
    const { todo } = store;
    return todo;
};

export default connect(mapStateToProps, { editTodo, saveTodo, makeDone, deleteTodo })(TodoElement);
