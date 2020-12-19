import React, {Component} from 'react';

class App extends Component {
myForm=React.createRef();
state={users:[], inputValue:''};
componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value=> this.setState({users:value}))
}

    render() {
    let {users, inputValue}=this.state;
        return (
           <div>
            <form action={'/savedata'} onSubmit={this.save} ref={this.myForm}>
                <input value={this.state.inputValue} type={'number'} onInput={this.commitState}></input>
                <button>save</button>
            </form>
               <div>
                   {inputValue users.find(value => value.id===+inputValue)}

               </div>
           </div>
        );
    }
}

export default App;