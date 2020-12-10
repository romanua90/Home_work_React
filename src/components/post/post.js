import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
    withRouter
} from "react-router-dom";

class Post extends Component {

    render() {
        let {item, clsName, selectThisPost, match:{url}} = this.props;
        return (

            <div className={clsName}>
                <p><b>id:   </b>{item.id}</p>
                <p><b>title:    </b>{item.title}</p>
                <p><b>body      </b>{item.body}</p>
                <Link to={`${url}/${item.id}`}>info</Link>
                <button onClick={()=>selectThisPost(item.id)}>Chose me</button>
                <hr/>
            </div>
        );
    }
}

export default withRouter(Post);