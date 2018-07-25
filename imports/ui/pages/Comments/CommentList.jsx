import React, { Component, Fragment } from 'react'

export default class CommentList extends Component {

    state = {
        post: []
    }

    componentWillReceiveProps(nextProps) {
        const postId = nextProps.comments[0] ? nextProps.comments[0].postId : 0;
        if (postId) {
            Meteor.call('post.get', postId, (err, post) => {
                if (err) console.log(err);
                this.setState({post});
            });
        }
    }

    deleteComment = commentId => {
        this.props.deleteComment(commentId);
    }

    render() {
        const {comments} = this.props;
        const {post} = this.state;
        const postUserId = post.userId;
        if (!comments) return <div>Loading...</div>;
        return comments && post && comments.map(comment => {
            return (
                <Fragment>
                    <p key={comment._id}>{comment.userEmail} * {comment.text}</p>
                    {
                        (comment.userId === Meteor.userId() || postUserId === Meteor.userId()) && (
                            <button onClick={() => this.deleteComment(comment._id)}>Delete</button>
                        )
                    }
                </Fragment>
            )
        })
    }
}