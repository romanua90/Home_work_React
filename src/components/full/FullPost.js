import React, {Component} from 'react';
import {PostService} from "../../services/PostService";

class FullPost extends Component {
    state = {post:null};
PostService=new PostService();

    async componentDidMount() {
        let {id}=this.props;
        let post= await this.PostService.getPostbById(id)
            this.setState({post})
    }

    render() {
        let {post}=this.state;
        return (
            <div>
                {
                    post &&
                    <div>
                    <p><b>id: </b>{post.id}</p>
                    <p><b>title: </b>{post.title}</p>
                    <p><b>body </b>{post.body}</p>
                    </div>
                }
                </div>
        );
    }
}

export default FullPost;