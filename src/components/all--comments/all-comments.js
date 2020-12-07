import React, {Component} from 'react';
import Post from "../post/post";
import './allcommments.css'
import Comment from "../comment/comment";

class AllComments extends Component {
    state = {posts: [], classState:'one', chosenPost:null};
    flag = 'false';

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments')
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
                <h1 onClick={this.changeColor} className={classState}> All Comments</h1>
                {
                    posts.map(value => (<Comment item={value} key={value.id} selectThisPost={this.selectThisPost} isShowButton={true}/>))
                }
                <hr/>
                {chosenPost && <Comment item={chosenPost} isShowButton={false}/>}
            </div>
        );
    }
}

export default AllComments;