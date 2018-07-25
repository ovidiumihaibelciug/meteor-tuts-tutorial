import Posts from './collection';
import Comments from '../comments/collection';

Posts.addLinks({
    'user': {
        type: 'one',
        collection: Meteor.users,
        field: 'userId',
    },
    'comments': {
        collection: Comments,
        inversedBy: 'post'
    }
})