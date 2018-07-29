import Posts from '/db/posts/collection';
import { getPostsWithComments } from '/db/queries';
import { getPost} from '/db/queries';

class PostService {

    static createPost (post) {
        Posts.insert(post);
    }

    static updatePost (_id, post) {
        Posts.update(_id, {
            $set: {
                title: post.title,
                description: post.description,
                type: post.type
            }
        });
    }

    static _getPost (_id) {
        return getPost.clone({
            _id: _id
        }).fetchOne();
    }

    static _getPosts () {
        return createQuery({
            getPosts
        }).fetch();
    }

    static _getPostWithComments (_id) {
        return getPostsWithComments.clone({
            postId: _id
        }).fetch();
    }

    static incrementPostViews (_id) {
        const post =  Posts.findOne(_id);
        Posts.update(_id, {
            $set: {
                views: post.views+1
            }
        })
    }

    static removePost (_id) {
        Posts.remove({_id: _id, userId: Meteor.userId()});
    }
}

export default PostService;