import React, {Component} from 'react';
import {CommentService} from "../../services/CommentService";

class FullComment extends Component {
    CommentService=new CommentService();
    state={comment:null};
    async componentDidMount() {
        let {id}=this.props;
        let comment= await this.CommentService.getCommentById(id);
        this.setState({comment:comment})
    }

    render() {
        let {comment}=this.state;
        return (
            comment &&
            <div>
                <p><b>id: </b>{comment.id}</p>
                <p><b>name: </b>{comment.name}</p>
                <p><b>email: </b>{comment.email}</p>
            </div>

        );
    }
}

export default FullComment;