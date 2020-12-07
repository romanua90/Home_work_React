import React, {Component} from 'react';
import './allpost.css'
import Post from "../post/post";


class AllPosts extends Component {
    state = {posts: [], classState:'one', chosenPost:null};
    flag = 'false';

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(postsFromAPI => {
                this.setState({posts: postsFromAPI})
            });
    }

    changeColor=()=> {
        if (this.flag) {
            this.setState({classState: 'one'})
        } else {
            this.setState({classState: 'two'})
        }
        this.flag = !this.flag;
    }
    selectThisPost=(id)=>{
        let chosen=this.state.posts.find(value=>value.id===id);
        this.setState({chosenPost:chosen});
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