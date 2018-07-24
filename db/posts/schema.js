import SimplSchema from 'simpl-schema';// Returns an array of label/value
import uniforms from 'uniforms';

export default new SimplSchema({
    title: String,
    description: String,
    userId: {
        type: String,
        optional: true
    },
    views: {
        type: Number,
        defaultValue: 0
    },
    createdAt: {
        type: Date,
        defaultValue: new Date()
    },
    type: {
        type: Number
    }
});