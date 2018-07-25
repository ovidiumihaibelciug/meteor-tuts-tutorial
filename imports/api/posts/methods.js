import PostService from './services/PostService';
import CommentService from '../comments/services/CommentService';

Meteor.methods({
    'post.create'(post) {
        PostService.createPost(post);
    },

    'post.list' () {
        return PostService._getPost();
    },

    'post.edit' (_id, post) {
        PostService.updatePost(_id, post);
    },

    'post.remove' (_id){
        PostService.removePost(_id);
        CommentService.removeComments(_id);
    },

    'post.get' (_id) {
        return PostService._getPost(_id);
    },

    'post.increment-view' (_id) {
       PostService.incrementPostViews(_id);
    },

    'post.comments' (_id) {
       return PostService._getPostWithComments(_id);
    }
});
