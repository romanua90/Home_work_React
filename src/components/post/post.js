import React, {Component} from 'react';

class Post extends Component {

    render() {
        let {item, clsName, selectThisPost} = this.props;
        return (

            <div className={clsName}>
                <p><b>id:   </b>{item.id}</p>
                <p><b>title:    </b>{item.title}</p>
                <p><b>body      </b>{item.body}</p>
                <button onClick={()=>selectThisPost(item.id)}>Chose me</button>
                <hr/>
            </div>
        );
    }
}

export default Post;