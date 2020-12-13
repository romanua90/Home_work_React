import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class User extends Component {
    render() {
        let {item, match:{url}}=this.props;
        return (
            <div>
                <div>
                    <p><b>id:   </b>{item.id}</p>
                    <p><b>username:    </b>{item.username}</p>
                    <p><b>email      </b>{item.email}</p>
                    <p><b>city      </b>{item.address.city}</p>
                    <Link to={`${url}/${item.id}`}>full info</Link>
                    <hr/>
                </div>
            </div>
        );
    }
}

export default withRouter(User);