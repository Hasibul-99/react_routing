import React, {Component} from 'react';
import axios from 'axios'

class Contact extends Component {

    // console.log("props", props)

    // setTimeout(() =>  {
    //     props.history.push('/about')
    // },2000);

    state = {
        posts: []
    }

    componentDidMount = () => {
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
                            <span className="card-title">{post.title}</span>
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