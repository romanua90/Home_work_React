import React, {Component} from 'react';
import {UserService} from "../../services/UserService";
import User from "../user/User";

class AllUsers extends Component {
    state = {users: []}
    UserService = new UserService()

    componentDidMount() {
        this.UserService.getAllUsers()
            .then(value => this.setState({users: value}))
    }

    render() {
        let {users} = this.state;
        return (
            <div>
                {
                    users.map(value => <User item={value} key={value.id}/>)
                }
            </div>
        );
    }
}

export default AllUsers;