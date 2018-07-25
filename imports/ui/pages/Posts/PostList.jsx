import React from 'react';
import { Link } from 'react-router-dom';

export default class PostList extends React.Component {
    constructor() {
        super();
        this.state = {posts: null};
    }

    componentDidMount() {
        Meteor.call('post.comments', (err, posts) => {
            if (err) console.log(err);
            console.log(posts);
            this.setState({posts});
        });
    }

    render() {
        const {posts} = this.state;
        const {history} = this.props;
        if (!posts) {
            return <div>Loading....</div>
        }

        return (
            <div className="post">
                {
                    Meteor.userId() ?
                        <button onClick={() => history.push('/posts/create')}>Create a new post</button>
                        :
                        (<p><Link to="/login">Login</Link> or <Link to="/register">Register</Link> to add a post </p>)
                }
                {
                    posts.map((post) => {
                        const {_id, title, description, views, comments} = post;
                        return (
                            <div key={_id}>
                                <p>Post id: {_id} </p>
                                <p>Post title: {title}, Post Description: {description} </p>
                                <p>Post Views: {views}</p>
                                <p>Post Comments: {comments ? comments.length : 0} </p>
                                <button onClick={() => {
                                    history.push("/posts/edit/" + _id)
                                }}> Edit post
                                </button>
                                <Link to={"/posts/view/" + _id}>View post</Link>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}
