import React, {Component} from 'react';
import {UserService} from "../../services/UserService";

class AllUsers extends Component {
    state={users:[]}
    UserService=new UserService()
    componentDidMount() {
        .then(value=>this.UserService.getAllUsers());
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