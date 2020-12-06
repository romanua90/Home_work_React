import React, {Component} from 'react';
import UserComp from "../user/UserComp";
import './all -users.css'

class AllUsers extends Component {
    state={users:[], classState:'',chosenUser:null};
    flag='false';
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value=> value.json())
            .then(usersFromAPI=> {
                this.setState({users:usersFromAPI})
            });
    }
    changeColor=()=>{
               if(this.flag){
            this.setState({classState:'one'})
        }
        else{
            this.setState({classState:'two'})
    }

this.flag=!this.flag;
    };
    selectThisUser=(id)=>
    {
        let chosen=this.state.users.find(value=>value.id===id);
    this.setState({chosenUser:chosen});
    };
    render() {
        let {users,chosenUser}=this.state;

        return (
            <div>
                <h1 onClick={this.changeColor} className={this.state.classState}>All Users Page</h1>

                {
                    users.map(value =>(<UserComp item={value} key={value.id} selectThisUser={this.selectThisUser}/>))
                }
                <hr/>

                { chosenUser &&
                    <UserComp item={chosenUser} clsName={'one'}/>
                }
            </div>
        );
    }
}

export default AllUsers;