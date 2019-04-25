import React, {Component} from 'react';

class ToDoTask extends Component {
    state = {
        task: this.props.task
    };

    handleChange = e => {
        let task = this.state.task;
        task.text = e.target.value;
        this.setState({
            task: task
        });
    };

    handlerCheckBoxClick = e => {
        if(e.target.checked === true){
            let task = this.state.task;
            task.done = true;
            this.setState({
                task: task
            });
            let input = document.getElementById('text' + this.props.index);
            input.style.textDecoration = "line-through";
        }else{
            let task = this.state.task;
            task.done = false;
            this.setState({
                task: task
            });
            let input = document.getElementById('text' + this.props.index);
            input.style.textDecoration = "none";
        }
    };

    handleOnDelete = () => {
        this.props.toDelete(this.props.index);
    };

    render() {
        return (
            <div className="ToDoTask">
                <input type="checkbox" className="Task__checkbox" onClick={ this.handlerCheckBoxClick }/>
                <input type="text" id = {"text" + this.props.index} className="Task__text" value={this.state.task.text} onChange={ this.handleChange }/>
                <button className="Task__button button-delete" onClick={this.handleOnDelete}>Delete</button>
            </div>
        );
    }
}

export default ToDoTask;
