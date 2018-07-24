import React, { Component } from 'react'

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
            this.setState({post});
        })
    }

    render() {
        const {post} = this.state;
        const { _id, title, description, createAt, type, views } = post;
        if (!post) return <div>Loading..</div>
        return (
            <div>
                <p>Id: {_id}</p>
                <p>Title: {title}</p>
                <p>Description: {description}</p>
                <p>Created at: {createAt}</p>
                <p>Type: {type}</p>
                <p>Views: {views}</p>
            </div>
        )
    }
}
