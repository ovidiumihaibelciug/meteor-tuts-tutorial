import {Meteor} from 'meteor/meteor'
import {Comments} from '/db';
import {Users} from '/db';

Meteor.methods({
    'comment.create' (comment, userId, postId) {
        comment.userId = userId;
        comment.postId = postId;
        Comments.insert(comment);
    },

    'comment.list' (postId) {
        const comments =  Comments.find({postId}).fetch();
        comments.forEach(comment => {
            const user = Users.findOne(comment.userId);
            comment.userEmail = user.emails[0].address;
        });
        return comments;
    },

    'comment.remove' (_id) {
        Comments.remove(_id);
    }
});