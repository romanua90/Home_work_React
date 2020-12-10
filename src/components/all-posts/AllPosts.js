import React, {Component} from 'react';
import './allpost.css'
import Post from "../post/post";
import {PostService} from "../../services/PostService";
import FullPost from "../full-post/FullPost";
import {Route, Switch, withRouter} from "react-router-dom";


class AllPosts extends Component {
    state = {posts: [], classState: 'one', chosenPost: null};
    flag = 'false';
    PostService = new PostService();

    async componentDidMount() {
        let posts = await this.PostService.getAllPost()
        this.setState({posts: posts});
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
            .then(value => this.setState({chosenPost: value}))
    }

    render() {
        let {posts, chosenPost, classState} = this.state;
        let {match:{url}}=this.props;
        return (
            <div>
                <h1 onClick={this.changeColor} className={classState}> All Posts List</h1>
                {
                    posts.map(value => (<Post item={value} key={value.id} selectThisPost={this.selectThisPost}/>))
                }
                <hr/>
                {chosenPost && <Post item={chosenPost} clsName={'post'}/>}
                <hr/>


                    <Switch>
                        <Route path={`${url}/:id`} render={(props) => {
                            let {match: {params: {id}}} = props;
                            return <FullPost id={id} key={id}/>
                        }}/>
                    </Switch>
                <hr/>
            </div>
        );
    }
}

export default withRouter(AllPosts);