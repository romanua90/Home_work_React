import React, {Component} from 'react';
import './allpost.css'
import Post from "../post/post";
import {PostService} from "../../services/PostService";


class AllPosts extends Component {
    state = {posts: [], classState: 'one', chosenPost: null};
    flag = 'false';
    PostService = new PostService();

    componentDidMount() {
        this.PostService.getAllPost()
            .then(value => this.setState({posts:value}));
    }

    changeColor = () => {
        if (this.flag) {
            this.setState({classState: 'one'})
        } else {
            this.setState({classState: 'two'})
        }
        this.flag = !this.flag;
    }
    selectThisPost = (id) => {
        this.PostService.getPostbById(id)
            .then(value=>this.setState({chosenPost:value}))
    }

    render() {
        let {posts, chosenPost, classState} = this.state;
        return (
            <div>
                <h1 onClick={this.changeColor} className={classState}> All Posts List</h1>
                {
                    posts.map(value => (<Post item={value} key={value.id} selectThisPost={this.selectThisPost}/>))
                }
                <hr/>
                {chosenPost && <Post item={chosenPost} clsName={'post'}/>}
            </div>
        );
    }
}

export default AllPosts;