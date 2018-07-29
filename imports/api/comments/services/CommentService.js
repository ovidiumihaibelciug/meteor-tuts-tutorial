import Comments from '/db/comments/collection';

import { getCommentsFromPost } from '/db/queries';
import Security from '../../security';

class CommentService {
    static createComment (comment, userId, postId) {
        Security.checkLoggedIn(Meteor.userId());
        if (userId !== Meteor.userId()) {
            throw new Meteor.Error('message', "Message");
        }
        comment.userId = userId;
        comment.postId = postId;
        Comments.insert(comment);
    }

    static _getCommentsFromPost (_id) {
        return getCommentsFromPost.clone({
            postId: _id
        }).fetch();
    }

    static removeComment(_id) {
        Comments.remove(_id);
    }

    // method that removes all the comment from a post ( when the post gets deleted )
    static removeComments (postId) {
        Comments.remove({postId: postId, userId: Meteor.userId()});
    }

}

export default CommentService;