import {
  GraphQLString,
  GraphQLInt,
  GraphQLObjectType
} from 'graphql';

const Ability = new GraphQLObjectType({
  name: 'Ability',
  fields: () => ({
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
    resource_uri: {
      type: GraphQLString
    }
  })
});

export default Ability;
