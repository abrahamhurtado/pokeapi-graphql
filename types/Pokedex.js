import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLList
} from 'graphql';

import Pokemon from './Pokemon';

import pokeapi from 'pokeapi';

const api = pokeapi.v1();

const Pokedex = new GraphQLObjectType({
  name: 'pokedex',
  fields: () => ({
    created: {
      type: GraphQLString
    },
    modified: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    pokemon: {
      type: new GraphQLList(new GraphQLObjectType({
        name: 'pokedexPokemon',
        fields: () => ({
          name: {
            type: GraphQLString
          },
          resource_uri: {
            type: GraphQLString
          }
        })
      }))
    },
    Pokemon: {
      type: new GraphQLList(Pokemon),
      resolve (parent, args) {
        const pokemon = parent.pokemon.map(
          ({ resource_uri }) => ({ resource_uri })
        );

        return api.get(pokemon);
      }
    }
  })
});

export default Pokedex;
