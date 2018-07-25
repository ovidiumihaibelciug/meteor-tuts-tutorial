import {Meteor} from 'meteor/meteor'
import {Posts} from '/db';
import {Comments} from '/db'

Meteor.methods({
    'post.create'(post) {
        Posts.insert(post);
    },

    'post.list' () {
        return Posts.find().fetch();
    },

    'post.edit' (_id, post) {
        Posts.update(_id, {
            $set: {
                title: post.title,
                description: post.description,
                type: post.type
            }
        });
    },

    'post.remove' (_id){
        Posts.remove({_id: _id, userId: this.userId});
        Comments.remove({postId: _id, userId: this.userId});
    },

    'post.get' (_id) {
        return Posts.findOne(_id);
    },

    'post.increment-view' (_id) {
        const post =  Posts.findOne(_id);
        Posts.update(_id, {
            $set: {
                views: post.views+1
            }
        })
    },

    'post.comments' (_id) {
        const posts = Posts.find().fetch();
        posts.forEach(post => {
            const comments =  Comments.find({postId: post._id}).fetch();
            post.commentsLength = comments.length;
        });
        return posts;
    }
});
