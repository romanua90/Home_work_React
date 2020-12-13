import React, {Component} from 'react';
import {UserService} from "../../services/UserService";

class AllUsers extends Component {
    state={users:[]}
    UserService=new UserService()
    componentDidMount() {
        this.UserService.getAllUsers();
        .then(this.setState({users:value}))
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default AllUsers;