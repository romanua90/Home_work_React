import React, {Component} from 'react';
import User from "./components/User";
import FullUser from "./components/FullUser";
import UserPostService from "./services/UserPostService";
import AllPosts from "./components/AllPosts";

class App extends Component {
    myForm = React.createRef();
    state = {inputValue: '', users: [], flag:'',isShowAll:false, UserPosts:[]};
    UserPostService=new UserPostService();
    componentDidMount() {
        this.UserPostService.getAllUsers()
        .then(value=> this.setState({users:value}))
    }

    render() {

        let {users, inputValue, flag, isShowAll, UserPosts} = this.state;
        return (
            <div>
                <form action={'/savedata'} onSubmit={this.fullUser} ref={this.myForm} >
                    <input value={this.state.inputValue} type='number' onInput={this.commitState}/>
                    <button>Show User</button>
                    <button onClick={this.showAll}>Show All Users</button>
                    <button onClick={this.clearAll}>Clear display</button>
                    <button onClick={this.allPostUser}>Show all posts of User</button>
                </form>

                <div>
                    {flag && <FullUser item={users.find(value => value.id === +flag)} key={inputValue}/>}

                </div>

                <div>
                    {UserPosts &&
                    UserPosts.map(value =>
                        <AllPosts posts={value} key={value.id}/>)
                    }

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
    allPostUser=(e)=>{
        e.preventDefault();
        let userId= +this.myForm.current[0].value;
        this.UserPostService.getAllPostsforUser(userId)
            .then(value => this.setState({UserPosts:value}))
    }

}

export default App;