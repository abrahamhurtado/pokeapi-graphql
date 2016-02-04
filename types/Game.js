import {
  GraphQLString,
  GraphQLInt,
  GraphQLObjectType
} from 'graphql';

const Game = new GraphQLObjectType({
  name: 'game',
  fields: () => ({
    created: {
      type: GraphQLString
    },
    generation: {
      type: GraphQLInt
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
    release_year: {
      type: GraphQLInt
    },
    resource_uri: {
      type: GraphQLString
    }
  })
});

export default Game;
