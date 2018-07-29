import { initialize } from 'meteor/cultofcoders:apollo';
import { load } from 'graphql-load';

load({
  typeDefs: `
    type User {
      _id: ID!
      emails: String,
      createdAt: String,
      services: String,
      comments: String
    }
    type Query {
      sayHello: String
    }
  `,
  resolvers: {
    Query: {
      sayHello: () => 'Hello world!',
    },
  },
});

initialize();