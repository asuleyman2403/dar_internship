import React, { Component } from 'react';
import {connect} from 'react-redux';

import { getUsers, getUserById } from '../actions/user.action';
import UserList from "./UserList/UserList";

class App extends Component{
  componentDidMount() {
    this.props.getUsers();
  }

  render(){
    return(
        <div>
          <UserList/>
        </div>
    )
  }
}

export default connect(null, { getUsers, getUserById })(App);
