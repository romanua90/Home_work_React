import React, {Component} from 'react';
import User from "./components/User";

class App extends Component {
    myForm = React.createRef();
    state = {inputValue: '', users: [], flag: ''};

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => this.setState({users: value}))
    }

    render() {
        let {users, inputValue, flag} = this.state;
        return (
            <div>

                <form action={'/savedata'} onSubmit={this.save} ref={this.myForm}>
                    <input value={this.state.inputValue} type='number' onInput={this.commitState}/>
                    <button>Show User</button>
                </form>

                <div>
                    {flag && <User item={users.find(value => value.id === +flag)} key={inputValue}/>}

                </div>
            </div>
        );
    }

    commitState = (e) => {
        this.setState({inputValue: e.target.value});
    }
    save=(e)=>{
        e.preventDefault();
        this.setState({flag: e.target[0].value});

    }


}

export default App;