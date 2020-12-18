import React, {Component} from 'react';
import Users from "./components/Users";
import Form from "./components/Form";

class App extends Component {
state={users:[]};
componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value=> this.setState({users:value}))
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