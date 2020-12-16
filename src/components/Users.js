import React, {Component} from 'react';
import FullUsers from "./FullUsers";

class Users extends Component {


    render() {
        const {items}=this.props;
        return (
            <div>
                <FullUsers items={items}  />
            </div>
        );
    }
}

export default Users;