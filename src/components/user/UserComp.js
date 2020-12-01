import React, {Component} from 'react';
import './user.css'
class UserComp extends Component {
    render() {
        // let value=this.props.value
        let {value, clsName}=this.props
        return (
            <div className={clsName}>
                <h2>
                    {value.name} | {value.age} | {value.status.toString()}
                </h2>
            </div>
        );
    }
}

export default UserComp;