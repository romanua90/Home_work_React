import React, {Component} from 'react';

class Form extends Component {
    myForm = React.createRef();
    state = {inputValue: '', inpVal:null};

    render() {

        let {inputValue,inpVal} = this.state;
        return (
            <div>
                <form action={'/savedata'} onSubmit={this.viewUser} ref={this.myForm}>
                    <input type='number' onInput={this.commitState} value={this.state.inputValue}/>
                    <button>send</button>
                    {inpVal &&
                    <div> {inpVal.id} - {inpVal.name} - {inpVal.username}- {inpVal.email} - {inpVal.address.city}</div>
                    }
                    {!inpVal &&
                    <div>!!!No data for view!!!</div>
                    }

                </form>


            </div>
        );
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