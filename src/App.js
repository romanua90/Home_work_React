import React, {Component} from 'react';
import UserComp from "./components/user/UserComp";
import AllUsers from "./components/all-users/AllUsers";


class App extends Component {

    render() {

        return (
            <div>
                {
                    <AllUsers/>
                }
            </div>
        );
    }
}

export default App;