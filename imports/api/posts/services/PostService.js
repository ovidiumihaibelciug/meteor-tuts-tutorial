import Posts from '/db/posts/collection';

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
        return Posts.findOne(_id);
    }

    static _getPosts () {
        return Posts.createQuery({
            title: 1,
            description: 1,
            userId: 1,
            views: 1,
            createdAt: 1,
            type: 1
        }).fetch();
    }

    static _getPostWithComments (_id) {
        const query = Posts.createQuery({
            $filters: {
                postId: _id
            },
            title: 1,
            desciption: 1,
            views: 1,
            comments: {
                _id: 1
            }
        });
        console.log(query.fetch());
        return query.fetch();
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
        Posts.remove({_id: _id, userId: this.userId});
    }
}

export default PostService;