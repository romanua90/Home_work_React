import React, {Component} from 'react';
import AllPosts from "./components/all-posts/AllPosts";
import AllComments from "./components/all--comments/all-comments";


class App extends Component {

    render() {

        return (
            <div>
                <AllComments/>
            </div>
        );
    }
}

export default App;