import React, {Component} from 'react';
import UserComp from "./components/user/UserComp";

class App extends Component {
    users = [
        {name: 'vasya', age: 31, status: false},
        {name: 'petya', age: 30, status: true},
        {name: 'kolya', age: 29, status: true},
        {name: 'olya', age: 28, status: false},
        {name: 'max', age: 30, status: true},
        {name: 'anya', age: 31, status: false},
        {name: 'oleg', age: 28, status: false},
        {name: 'andrey', age: 29, status: true},
        {name: 'masha', age: 30, status: true},
        {name: 'olya', age: 31, status: false},
        {name: 'max', age: 31, status: true}
    ];
    render() {

        return (
            <div>
                {
                    this.users.map((value,index)=>{
                        let name='';
                        if(index%2){
                            name='second';
                        }
                        else{
                            name='main';
                        }
                        return (<UserComp value={value} key={index} clsName={name}/>)
                    })
                }


            </div>
        );
    }
}

export default App;