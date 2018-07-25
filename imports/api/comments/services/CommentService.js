import Comments from '/db/comments/collection';

class CommentService {
    static createComment (comment, userId, postId) {
        comment.userId = userId;
        comment.postId = postId;
        Comments.insert(comment);
    }

    static _getCommentsFromPost (postId) {
        const query = Comments.createQuery({
            $filters: {
                postId: postId
            },
            text: 1,
            user: {
                emails: 1
            }
        });
        return query.fetch();
    }

    static removeComment(_id) {
        Comments.remove(_id);
    }

    // method that removes all the comment from a post ( when the post gets deleted )
    static removeComments (postId) {
        Comments.remove({postId: postId, userId: this.userId});
    }

}

export default CommentService;