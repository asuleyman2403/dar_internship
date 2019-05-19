import React, {Component} from 'react';
import { getUsers } from "../../actions/user.action";
import { connect } from 'react-redux';
class UserList extends Component {

    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return (
            <div>
                {
                    this.props.users &&
                    this.props.users.map( (user) => {
                        return <div><span>user.name</span></div>
                    })
                }
                {
                    !this.props.user &&
                    <div>No user</div>
                }
            </div>
        )
    }
}
const mapStateToProp = store => {
    const  { users }  = store.user;
    return users;
};
export default connect(mapStateToProp, { getUsers })(UserList);
