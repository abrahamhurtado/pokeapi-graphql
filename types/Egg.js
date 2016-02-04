import {
  GraphQLString,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLList
} from 'graphql';

import Pokemon from './Pokemon';

import pokeapi from 'pokeapi';

const api = pokeapi.v1();

const Egg = new GraphQLObjectType({
  name: 'egg',
  fields: () => ({
    created: {
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
    pokemon: {
      type: new GraphQLList(new GraphQLObjectType({
        name: 'pokemons',
        fields: {
          name: {
            type: GraphQLString
          },
          resource_uri: {
            type: GraphQLString
          }
        }
      }))
    },
    Pokemon: {
      type: Pokemon,
      resolve (parent, args) {
        const pokemon = parent.pokemon.map(
          ({ resource_uri }) => ({ resource_uri })
        );

        return api.get(pokemon);
      }
    },
    resource_uri: {
      type: GraphQLString
    }
  })
});

export default Egg;
