import React, { Component } from 'react';

import CommentContainer from '../Comments/CommentContainer';
import {PostTypesLabel} from '/db/posts/enums/types';

export default class PostView extends Component {

    state = {
        post: {}
    }

    componentDidMount() {
        const id = this.props.match.params._id;
        Meteor.call('post.increment-view', id, (err) => {
            if (err) console.log(err);
        })
        Meteor.call('post.get', id, (err, post) => {
            if (err) console.log(err);
            console.log("POST", post);
            this.setState({post});
        })
    }

    deletePost = id => {
        Meteor.call('post.remove', id, err => {
            console.log(err);
        })
        this.props.history.push('/posts');
    }

    render() {
        const {post} = this.state;
        if (!post || !post.user) return <div>Loading..</div>
        const { _id, title, description, createdAt, type, views, user } = post;
        return (
            <div>
                <p>Id: {_id}</p>
                <p>Title: {title}</p>
                <p>Description: {description}</p>
                <p>Created at: {new Date(createdAt).toLocaleDateString()}</p>
                <p>Type: {PostTypesLabel[type]}</p>
                <p>Views: {views}</p>
                <p>UserEmail: {user.emails[0].address}</p>
                {
                    user._id === Meteor.userId() && <button onClick={() => this.deletePost(_id)}>Delete Post</button>
                }
                <CommentContainer postId={_id} />
            </div>
        )
    }
}
