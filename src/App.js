import React, {Component} from 'react';
import AllPosts from "./components/all-posts/AllPosts";
import AllComments from "./components/all-comments/AllComments";


class App extends Component {

    render() {

        return (
            <div>
                <AllComments/>
                <AllPosts/>
            </div>
        );
    }
}

export default App;