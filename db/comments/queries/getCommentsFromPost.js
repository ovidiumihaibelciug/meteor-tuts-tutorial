import Comments from '../collection';

export default Comments.createQuery('getCommentsFromPost', {
    $filter ({filters, params}) {
        filters.postId = params.postId
    },
    text: 1,
    user: {
        emails: 1
    },
})