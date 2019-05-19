import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addTodo } from "../../actions/todo.action";
import './AddTodo.css';

class AddTodo extends Component {
    state = {
        value: '',
    };

    handleOnChange = e => {
        this.setState({ value: e.target.value });
    };

    handleOnAdd = () => {
        let newTodo = {
            text: this.state.value,
            done: false,
            disabled: true
        };
        this.props.addTodo(newTodo);
        this.setState({ value: ''});
    };

    render() {
        return (
            <div>
                <input className="AddTodo__input" type="text" value = { this.state.value } onChange={ this.handleOnChange }/>
                <button className="AddTodo__button" onClick={ this.handleOnAdd }>ADD</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        list: state.todo.list
    }
};

export default connect(mapStateToProps, { addTodo })(AddTodo);
