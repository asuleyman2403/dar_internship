import React, {Component} from 'react';
import './Posts.css';
import {connect} from "react-redux";
import { deleteUserPost } from "../../actions/post.action";

class Posts extends Component {
    state = {
        title: '',
        body: ''
    };

    handleTitleChanges = e => {
        this.setState({
            title: e.target.value
        });
    };

    handlerBodyChanges = e => {
        this.setState({
            title: e.target.value
        });
    };

    handleCreate = (userId) => {

    };

    handleEdit = () => {

    };

    handleDelete = (id, userId) => {
        this.props.deleteUserPost(id, userId);
    };

    render() {
        const { currentUserPosts } = this.props;
        return (
            currentUserPosts !== undefined ? (
            <div className = "posts">
                <div className = "posts-title">Post</div>
                {
                    currentUserPosts.map((post, index) => (
                        <div className="post" key = { index }>
                            <div className="post-title">{(index + 1) + ": " + post.title}</div>
                            <div>{post.body}</div>
                            <div>
                                <button onClick={ () => { this.handleEdit(post.id, post.userId) } }>Edit</button>
                                <button onClick={ () => {this.handleDelete(post.id, post.userId)} }>Delete</button>
                            </div>
                        </div>
                    ))
                }
                <div>
                    <input type="text" onChange={ this.handleTitleChanges}/>
                    <input type="text" onChange={ this.handlerBodyChanges}/>
                    <button>Create</button>
                </div>
            </div>
            ) : (
                <div>Click to User to see posts</div>
            )
        );
    }
}

function mapStateToProps(state){
    return {
        currentUserPosts : state.post.currentUserPosts
    }
}

export default connect(mapStateToProps, {
    deleteUserPost
})(Posts);
