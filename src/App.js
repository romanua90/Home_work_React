import React, {Component} from 'react';
import User from "./components/User";
import FullUser from "./components/FullUser";
import UserPostService from "./services/UserPostService";

class App extends Component {
    myForm = React.createRef();
    state = {inputValue: '', users: [], flag:'',isShowAll:false};
    UserPostService=new UserPostService();
    componentDidMount() {
        let users=this.UserPostService.getAllUsers();
        this.setState({users:users})
    }

    render() {

        let {users, inputValue, flag, isShowAll} = this.state;
        return (
            <div>

                <form action={'/savedata'} onSubmit={this.fullUser} ref={this.myForm}>
                    <input value={this.state.inputValue} type='number' onInput={this.commitState}/>
                    <button>Show User</button>
                    <button onClick={this.showAll}>Show All Users</button>
                    <button onClick={this.clearAll}>Clear display</button>
                </form>

                <div>
                    {flag && <FullUser item={users.find(value => value.id === +flag)} key={inputValue}/>}

                </div>
                <div>
                    {isShowAll &&
                    users.map(value =>
                    <User item={value} key={value.id} />)
                    }

                </div>
            </div>
        );
    }

    commitState = (e) => {
        this.setState({inputValue: e.target.value});
    }
    fullUser=(e)=>{
        e.preventDefault();
        this.setState({flag: e.target[0].value});

    }
    showAll=(e)=>{
        e.preventDefault();
        this.setState({isShowAll:true})

}
    clearAll=()=>{
        window.location.reload();

    }

}

export default App;