import {Meteor} from 'meteor/meteor'
import CommentService from './services/CommentService';

Meteor.methods({
    'comment.create' (comment, userId, postId) {
        CommentService.createComment(comment, userId, postId);
    },

    'comment.list' (postId) {
        return CommentService._getCommentsFromPost(postId);
    },

    'comment.remove' (_id) {
        CommentService.removeComment(_id);
    }
});