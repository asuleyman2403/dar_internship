import React, { Component } from 'react';

import Users from './users/Users';
import Posts from "./posts/Posts";

class App extends Component{
  render(){
    return(
        <div>
          <Users/>
          <Posts/>
        </div>
    )
  }
}

export default App;
