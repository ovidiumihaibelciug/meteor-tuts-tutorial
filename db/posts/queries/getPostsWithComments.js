import Posts from '../collection';

export default Posts.createQuery('getPostsWithComments', {
    $filter({filters, params}) {
        filters.postId = params._id
    },
    title: 1,
    description: 1,
    views: 1,
    comments: {
        _id: 1
    }
})