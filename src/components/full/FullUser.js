import React, {Component} from 'react';
import {UserService} from "../../services/UserService";

class FullUser extends Component {
    state = {user:null};
    UserService=new UserService();

    async componentDidMount() {
        let {id}=this.props;
        let user= await this.UserService.getUserById(id)
        this.setState({user})
    }

    render() {
        let {user}=this.state;
        return (
            <div>
                {
                    user &&
                    <div>
                        <p><b>id: </b>{user.id}</p>
                        <p><b>name: </b>{user.name}</p>
                        <p><b>username: </b>{user.username}</p>
                        <p><b>email </b>{user.email}</p>
                    </div>
                }
            </div>
        );
    }
}

export default FullUser;