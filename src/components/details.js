import React, {Component} from 'react';
import axios from 'axios';

class Details extends Component {

    state = {
        id: null,
        post: null,
        props: {}
    }

    componentDidMount = () => {
        console.log("tree", this.props);
        let id = this.props.match.params.post_id

        this.getDataForRes(null, id);

    }

    componentWillReceiveProps(nextProps) {
        console.log("id", this.props);
        // console.log("nextProps",nextProps);

            // console.log("nextProps",nextProps);
            
            let pathId = "";
            // console.log("pathId", pathId);
            // this.setState({
            //     id: pathId
            // })

            pathId = nextProps.match.params.post_id;

            this.getDataForRes(pathId);
    }

    getDataForRes = (pathId, id) => {

        let selectedId = pathId ? pathId : id;

        axios.get('https://jsonplaceholder.typicode.com/posts/'+ selectedId)
            .then(res => {
                this.setState({
                    post: res.data
                })
            })

    } 

    render() {

        const post = this.state.post ? (
            <div className="post">
                <h3 className="center">{this.state.post.title}</h3>
                <p>{this.state.post.body}</p>
            </div>
        ) : (
            <div className="center">Loading..</div>
        )
        return (
            <div className="container">
                {post}
            </div>
        )
    }
}

export default Details;