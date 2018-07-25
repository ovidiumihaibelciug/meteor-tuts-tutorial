import React, { Component, Fragment } from 'react'
import {AutoForm, LongTextField} from 'uniforms-unstyled';
import CommentSchema from '/db/comments/schema';

import CommentList from './CommentList';

export default class CommentContainer extends Component {

    state = {
        comments: []
    }

    componentWillReceiveProps(nextProps) {
        const postId = nextProps.postId;
        Meteor.call('comment.list', postId, (err, comments) => {
            if (err) console.log(err);

            this.setState({comments})

        })
    }

    submit = comment => {
        const userId = Meteor.userId();
        const postId = this.props.postId;
        Meteor.call('comment.create', comment, userId, postId, err => {
            if (err) console.log(err);
            Meteor.call('comment.list', postId, (err, comments) => {
                if(err) console.log(err)
                this.setState({comments});
            })

        });
    }

    deleteComment = commentId => {
        const postId = this.props.postId;
        Meteor.call('comment.remove', commentId, err => {
            if (err) console.log(err);
            Meteor.call('comment.list', postId, (err, comments) => {
                if(err) console.log(err)
                this.setState({comments});
            })
        })
    }


    render() {
        const {comments} = this.state;
        return (
            <Fragment>
                <AutoForm onSubmit={this.submit} schema={CommentSchema}>
                    <LongTextField name="text"/>

                    <button type='submit'>Add Comment</button>
                </AutoForm>
                {
                    comments && <CommentList comments={comments} deleteComment={(id) => this.deleteComment(id)} />
                }
            </Fragment>
        )
    }
}
