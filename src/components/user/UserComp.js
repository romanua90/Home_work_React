import React, {Component} from 'react';
import './user.css'
class UserComp extends Component {
    render() {
        let {item, clsName, selectThisUser}=this.props;
        return (
            <div className={clsName}>
                <p><b>id:</b>  {item.id}</p>
                <p><b>name:</b>   {item.name}<br/></p>
                <p><b>email:</b>   {item.email}<br/></p>
                <p><b>body:</b>    {item.body}</p>
                <button onClick={()=>selectThisUser(item.id)}>Choose me</button>
                <hr/>
            </div>
        );
    }
}

export default UserComp;