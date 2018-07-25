import Posts from '../posts/collection';
import Comments from '../comments/collection';

Meteor.users.addLinks({
    'posts': {
        collection: Posts,
        inversedBy: 'user'
    },
    'comments': {
        collection: Comments,
        inversedBy: 'user'
    }
})