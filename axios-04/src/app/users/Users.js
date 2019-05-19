import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUsers, setActiveUser, getUserById } from '../../actions/user.action';
import { fetchUserPosts } from '../../actions/post.action';

import './Users.css';

class Users extends Component {

    componentDidMount(){
        this.props.getUsers();
    }

    handleUserClick = (user, index) => {
        const { setActiveUser, fetchUserPosts } = this.props;
        setActiveUser(index);
        fetchUserPosts(user.id);
    };

    render() {

        const { usersData : {users, currentUser}, setActiveUser } = this.props;

        return (
            
            users && users.length ? (
                <div className="Users" >
                    {
                        users.map((user, index) => (
                            <div 
                                key={user.id} 
                                className={`Users__user ${ currentUser && user.id === currentUser.id ? 'Users__user--active' : '' }`}
                                onClick={() => {this.handleUserClick(user, index)}}  
                            >
                                {user.name}
                            </div>
                        ))
                    }
                </div>
            ): (
                <div>No users</div>
            )

        );
    }
}

function mapStateToProps(state){
    return {
        usersData : state.user
    }
}

export default connect(mapStateToProps, 
{
    getUsers, 
    setActiveUser, 
    getUserById, 
    fetchUserPosts
})(Users);
