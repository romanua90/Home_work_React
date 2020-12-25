import React, {Component} from 'react';
import Users from "./components/Users";
import Form from "./components/Form";
import userService from "./services/userService";

class App extends Component {
    UserService=new userService();
state={users:[]};
componentDidMount() {
    this.UserService.
}

    render() {
const {users}=this.state;
        return (
           <div>
    <Users items={users}/>
    <Form item={users} key={users}/>
           </div>
        );
    }
}

export default App;