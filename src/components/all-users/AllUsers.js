import React, {Component} from 'react';
import {UserService} from "../../services/UserService";
import User from "../user/User";
import {Route, Switch, withRouter} from "react-router-dom";
import FullPost from "../full/FullPost";
import FullUser from "../full/FullUser";

class AllUsers extends Component {
    state = {users: []}
    UserService = new UserService()

    componentDidMount() {
        this.UserService.getAllUsers()
            .then(value => this.setState({users: value}))
    }

    render() {
        let {users} = this.state;
        let {match:{url}}=this.props;
        return (
            <div>
                <h1 > All Users</h1>
                {
                    users.map(value => <User item={value} key={value.id}/>)
                }
                <div>
                <Switch>
                    <Route path={`${url}/:id`} render={(props) => {
                        let {match: {params: {id}}} = props;
                        return <FullUser id={id} key={id}/>
                    }}/>
                </Switch>
                <hr/>

            </div>
            </div>
        );
    }
}

export default withRouter(AllUsers);