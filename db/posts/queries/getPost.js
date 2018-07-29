import Posts from '../collection';

export default Posts.createQuery('getPost', {
    $filter({filters, params}) {
        filters._id = params._id
    },
    _id: 1,
    title: 1,
    description: 1,
    user: {
        emails: 1
    },
    views: 1,
    createdAt: 1,
    type: 1,
    comments: {
        _id: 1
    }
})