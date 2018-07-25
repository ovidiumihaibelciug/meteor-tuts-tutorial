import React from 'react';
import {AutoForm, AutoField, LongTextField, SelectField} from 'uniforms-unstyled';
import PostSchema from '/db/posts/schema';


export default class PostCreate extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        if (!Meteor.userId()) this.props.history.push('/posts')
    }

    submit = (post) => {
        Meteor.call('secured.post_create', post, (err) => {
            if (err) {
                return alert(err.reason);
            }
            alert('Post added!')
        });
    };

    render() {
        const {history} = this.props;
        let data = [
            {label: 'Psychology', value: 1},
            {label: 'Nature', value: 2},
            {label: "Music", value: 3},
            {label: "Programming", value: 4},
            {label: "Project Management", value: 5},
            {label: "Other", value: 6}
        ]
        return (
            <div className="post">
                <AutoForm onSubmit={this.submit} schema={PostSchema}>
                    <AutoField name="title"/>
                    <LongTextField name="description"/>
                    <SelectField name="type" options={data} />

                    <button type='submit'>Add post</button>
                    <button onClick={() => history.push('/posts')}>Back to posts</button>
                </AutoForm>
            </div>
        )
    }
}
