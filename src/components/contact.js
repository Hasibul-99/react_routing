import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Contact extends Component {

    // console.log("props", props)

    // setTimeout(() =>  {
    //     props.history.push('/about')
    // },2000);

    state = {
        posts: []
    }

    componentDidMount = () => {

        // console.log("props", this.props);
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
          this.setState({
              posts: res.data
          })
      })
    }
    

    render() {
        const {posts} = this.state;

        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <Link to={'/contact/'+ post.id}>
                                <span className="card-title">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">NO post found</div>
        )



        return (
            <div className="container">
                <h4 className="center">Contact</h4>
                {postList}    
            </div>
    
        )
    }
}

export default Contact;