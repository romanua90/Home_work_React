import React, {Component} from 'react';

class Form extends Component {
    myForm = React.createRef();
    state = {inputValue: '', inpVal: []};

    render() {

        let {inpVal} = this.state;
        return (
            <div>
                <form action={'/savedata'} onSubmit={this.viewUser} ref={this.myForm}>
                    <input type='number' onInput={this.commitState} value={this.state.inputValue}/>
                    <button>send</button>
                    <div> {inpVal.id} - {inpVal.username}</div>
                </form>


            </div>
        );
    }

    send = (e) => {
        let {item} = this.props;
        e.preventDefault();
        let input = e.target[0].value;
        item.map((value, index) => {
            if (index === (input - 1)) {
                this.setState({inpVal: value})
            }
        })
    }
    viewUser = (e) => {
        e.preventDefault();
        let {item} = this.props;
        let input1 = e.target[0].value;
        let arr=item.find((value)=> value.id===+input1)
        this.setState({inpVal: arr})
    }

    commitState = (e) => {
        this.setState({inputValue: e.target.value});

    };
}

export default Form;