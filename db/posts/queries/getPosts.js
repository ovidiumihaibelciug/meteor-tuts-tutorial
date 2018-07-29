import Posts from '../collection'

export default Posts.createQuery('getPosts', {
    title: 1,
    description: 1,
    userId: 1,
    views: 1,
    createdAt: 1,
    type: 1
})