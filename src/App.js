import React, {Component} from 'react';
import AllPosts from "./components/all-posts/AllPosts";
import AllComments from "./components/all-comments/AllComments";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class App extends Component {

    render() {

        return (
            <Router>
                <div>
                    <div><Link to={'/posts'}>
                        posts
                    </Link></div>
                    <div><Link to={'comments'}>
                        comments
                    </Link>
                    </div>

                    <Switch>
                    <Route path={'/posts'} render={() => {
                        return <AllPosts/>
                    }}/>
                    <Route path={'/comments'} render={() => {
                        return <AllComments/>
                    }}/>
                    </Switch>


                </div>
            </Router>

        );
    }
}

export default App;