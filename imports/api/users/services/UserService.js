import Users from '/db/users/collection';

class UserService {
    static registerUser (data) {
        const user = Users.findOne({'emails.0.address': data.email});

        if (user) {
            throw new Meteor.Error(500, 'email_already_taken',
                'Email already taken');
        }

        Accounts.createUser({
            email: data.email,
            password: data.password
        });
    }

    static _getUser (_id) {
        return Users.findOne(_id);
    }
}

export default UserService;