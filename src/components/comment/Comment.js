import React, {Component} from 'react';

class Comment extends Component {
    render() {
        let {item, clsName, selectThisComment, isShowButton} = this.props;
        return (

            <div className={clsName}>
                <p><b>id: </b>{item.id}</p>
                <p><b>name: </b>{item.name}</p>
                <p><b>email: </b>{item.email}</p>
                {isShowButton &&
                <button onClick={() => selectThisComment(item.id)}>Chose me</button>
                }
                <hr/>
            </div>
        );
    }
}


export default Comment;