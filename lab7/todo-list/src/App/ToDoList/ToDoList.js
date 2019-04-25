import React, {Component} from 'react';
import ToDoTask from './ToDoTask/ToDoTask';
import './ToDoTask/ToDoTask.css';
class ToDoList extends Component {
    state = {
        list: this.props.list
    };

    onDelete = (index) => {
        console.log(index);
        this.props.list.splice(index, 1);
        this.setState({
            list: this.props.list
        });
    };

    render() {
        let { list } = this.props;
        return (
            <div className="ToDoList">
                {
                    list.map( (el, index) =>
                        <ToDoTask task = {el} key = {index} index = {index} toDelete = {this.onDelete}/>
                    )
                }
            </div>
        );
    }
}

export default ToDoList;
