import React from 'react';
import {Link} from 'react-router-dom';
import postImage from '../post-time.png';
import { connect } from 'react-redux';

class Home extends React.Component{
   
    render() {
        
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div className="post card" key={post.id}>
                    <img src={postImage} alt="post image" />
                        <div className="card-content">
                        <Link to={'/posts/' + post.id}>
                           <span className="card-title red-text">{post.title}</span>
                        </Link>    
                        <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
            
        ) : (<p className="center">No Post Found!</p>);
        return(
            <div className="container home">
                <h3 className="center">Home</h3>
                {postList}
            </div>
        )
    } 
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);