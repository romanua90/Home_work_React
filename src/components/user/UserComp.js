import React, {Component} from 'react';
import './user.css'
class UserComp extends Component {
    render() {
        let {item, clsName}=this.props;
        return (
            <div className={clsName}>
                <h3>
                    {item.id}-{item.name}-{item.username}-{item.address.city}
                </h3>
            </div>
        );
    }
}

export default UserComp;