import {
  GraphQLString,
  GraphQLInt,
  GraphQLObjectType
} from 'graphql';

const Move = new GraphQLObjectType({
  name: 'move',
  fields: () => ({
    accuracy: {
      type: GraphQLInt
    },
    category: {
      type: GraphQLString
    },
    created: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    id: {
      type: GraphQLInt
    },
    modified: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    power: {
      type: GraphQLInt
    },
    pp: {
      type: GraphQLInt
    },
    resource_uri: {
      type: GraphQLString
    }
  })
});

export default Move;
