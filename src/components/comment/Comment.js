import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class Comment extends Component {

    render() {
        let {item, clsName, selectThisComment, isShowButton, match:{url}} = this.props;
        return (

            <div className={clsName}>
                <p><b>id: </b>{item.id}</p>
                <p><b>name: </b>{item.name}</p>
                <p><b>email: </b>{item.email}</p>
                <Link to={`${url}/${item.id}`}>full info</Link>

                {isShowButton &&
                    <button onClick={() => selectThisComment(item.id)}>Chose me</button>
                }
                <hr/>

            </div>
        );
    }
}


export default withRouter(Comment);