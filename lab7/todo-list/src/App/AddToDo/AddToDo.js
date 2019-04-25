import React, {Component} from 'react';

class AddToDo extends Component {
    state = {
        value: ''
    };
    handleChange = e => {
        this.setState(
            {
                value: e.target.value
            }
        );
    };

    handleOnAdd = () => {
        if(this.state.value !== ''){
            let newTask = {
                text: this.state.value,
                done: false
            };
            this.props.onAdd(newTask);
            this.setState({value: ''});
        }
    };

    render() {
        return (
            <div className="AddToDo">
                <div className="AddToDo-container">
                    <h1 className="AddToDo__title">Todo List</h1>
                    <div className="AddToDo-main">
                        <input type="text" className="AddToDo__input" value = {this.state.value}  onChange={ this.handleChange } placeholder="Type new task..."/>
                        <button className="AddToDo__submit" onClick={this.handleOnAdd}>ADD</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddToDo;
