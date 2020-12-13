import React, {Component} from 'react';
import './allcommments.css'
import Comment from "../comment/Comment";
import {CommentService} from "../../services/CommentService";
import FullComment from "../full/FullComment";
import {Route, Switch, withRouter} from "react-router-dom";

class AllComments extends Component {
    state = {comments: [], classState: 'one', chosenComment: null};
    flag = 'false';
    CommentService = new CommentService();

    async componentDidMount() {
        let comments= await this.CommentService.getAllComments()
            this.setState({comments: comments})
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
        let {match:{url}}=this.props;
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
                <div className={'comment'}>
                    <Switch>
                        <Route path={`${url}/:id`} render={(props) => {
                            let {match:{params:{id}}}= props;
                            return  <FullComment id={id} key={id}/>
                        }}/>
                       </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(AllComments);