import React, {Component} from 'react';
import Post from "../post/post";
import './allcommments.css'
import Comment from "../comment/Comment";
import {CommentService} from "../../services/CommentService";

class AllComments extends Component {
    state = {comments: [], classState: 'one', chosenComment: null};
    flag = 'false';
    CommentService = new CommentService();

    componentDidMount() {
        this.CommentService.getAllComments()
            .then(value => this.setState({comments: value}))
    }


    changeColor = () => {
        if (this.flag) {
            this.setState({classState: 'one'})
        } else {
            this.setState({classState: 'two'})
        }
        this.flag = !this.flag;
    }
    selectThisComment = (id) => {
        this.CommentService.getCommentById(id)
            .then(value => this.setState({chosenComment: value}))
    }

    render() {
        let {comments, chosenComment, classState} = this.state;
        return (
            <div>
                <h1 onClick={this.changeColor} className={classState}> All Comments</h1>
                {
                    comments.map(value => (
                        <Comment item={value} key={value.id} selectThisComment={this.selectThisComment}
                                 isShowButton={true}/>))
                }
                <hr/>
                {chosenComment && <Comment item={chosenComment} isShowButton={false} clsName={'one'}/>}
            </div>
        );
    }
}

export default AllComments;