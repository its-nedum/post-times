import React from 'react';
import Axios from 'axios';

class Post extends React.Component {
    state = {
        post: []
    }
    componentDidMount(){
       let id = this.props.match.params.postId
       
       Axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(res => {
            this.setState({
                post: res.data
            })
        })
    }
    render(){
        const {post} = this.state;
        const singlePost = post ? (
                <div className="post card" key={post.id}>
                        <div className="card-content">
                        
                           <span className="card-title">{post.title}</span>
                           
                        <p>{post.body}</p>
                        </div>
                    </div>
            ) : (<div className="center">Loading post...</div>)
        return(
            <div className="container">
                {singlePost}
            </div>
        )
    }
}

export default Post;