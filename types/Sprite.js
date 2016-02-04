import {
  GraphQLString,
  GraphQLInt,
  GraphQLObjectType
} from 'graphql';

import Pokemon from './Pokemon';

import pokeapi from 'pokeapi';

const api = pokeapi.v1();

const Sprite = new GraphQLObjectType({
  name: 'sprite',
  fields: () => ({
    created: {
      type: GraphQLString
    },
    id: {
      type: GraphQLInt
    },
    image: {
      type: GraphQLString
    },
    modified: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    pokemon: {
      type: new GraphQLObjectType({
        name: 'pokemon',
        fields: {
          name: {
            type: GraphQLString
          },
          resource_uri: {
            type: GraphQLString
          }
        }
      })
    },
    Pokemon: {
      type: Pokemon,
      resolve (parent, args) {
        const { resource_uri } = parent.pokemon;

        return api.get({resource_uri});
      }
    },
    resource_uri: {
      type: GraphQLString
    }
  })
});

export default Sprite;
