import React from 'react';
import { connect } from 'react-redux';
import { deletePostAction } from '../actions/postAction';


class Post extends React.Component {
    
    handleClick = () =>{
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }
    render(){
        
        const { post } = this.props;
        const singlePost = post ? (
                <div className="post card" key={post.id}>
                        <div className="card-content">
                           <span className="card-title red-text">{post.title}</span>
                        <p>{post.body}</p>
                        <div className="center">
                            <button className="btn grey" onClick={this.handleClick}>
                                Delete Post
                            </button>
                        </div>
                        </div>
                </div>
            ) : (<div className="center">Post is Loading...</div>)
        return(
            <div className="container">
                {singlePost}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.postId;
    return{
        post: state.posts.find(post => post.id === id)
    } 
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch(deletePostAction(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);