import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../../actions/todo.action';

import './AddTodo.css';

class AddTodo extends Component {

    state = {
        value: '',
        isAdmin: true,
        someData: []
    }

    componentDidMount(){
        console.log(this.props);
    }

    handleAddTodo = () => {
        let newTodo = {
            text: this.state.value,
            done: false,
            disabled: true
        }
        // this.props.onAdd(newTodo);

        this.props.addTodo(newTodo);
        this.setState({value: ''});
    }

    handleOnChange = e => {
        this.setState({value : e.target.value});
    }

    render() {
        return (
            <div className="AddTodo" >
                <input className="input" value={this.state.value} onChange={this.handleOnChange} />
                <button className="button" onClick={this.handleAddTodo} >Add</button>
            </div>
        );
    }
}

const mapStateToProps = state => {

    // let list = state.todo.list;
    // list = list.filter(todo => todo.done);

    return {
        list : state.todo.list
    }
}

export default connect(mapStateToProps, { addTodo })(AddTodo);