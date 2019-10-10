import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

class Home extends React.Component{
    state = {
        posts: []
    }
    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res.data)
                this.setState({
                    posts: res.data.slice(0,10)
                })
            }).catch(err => console.log(err));
    }

    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                        <Link to={'/posts/' + post.id}>
                           <span className="card-title">{post.title}</span>
                        </Link>    
                        <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
            
        ) : (<p className="center">No posts found!</p>);
        return(
            <div className="container">
                <h3 className="center">Home</h3>
                {postList}
            </div>
        )
    } 
}

export default Home;