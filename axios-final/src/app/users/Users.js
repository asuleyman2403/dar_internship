import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUsers, setActiveUser } from '../../actions/user.action';

import './Users.css';

class Users extends Component {

    componentDidMount(){
        this.props.getUsers();
    }

    // handleUserClick = index => {
    //     const { setActiveUser, getUserPosts } = this.props;
    //     setActiveUser(index);
    //     getUserPosts(index);
    // }

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
                                onClick={() => { setActiveUser(index) }}  
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

export default connect(mapStateToProps, {getUsers, setActiveUser})(Users);