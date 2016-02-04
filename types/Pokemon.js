import {
  GraphQLString,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLList
} from 'graphql';

import pokeapi from 'pokeapi';

import Ability from './Ability';
import Move from './Move';
import Egg from './Egg';

const api = pokeapi.v1();

const Pokemon = new GraphQLObjectType({
  name: 'Pokemon',
  fields: () => ({
    name: {
      type: GraphQLString,
      description: 'Nombre del Pokémon'
    },
    national_id: {
      type: GraphQLInt,
      description: 'ID del Pokémon en el Pokédex Nacional'
    },
    abilities: {
      type: new GraphQLList(new GraphQLObjectType({
        name: 'abilities',
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
    Abilities: {
      type: new GraphQLList(Ability),
      resolve (parent, args) {
        const abilities = parent.abilities.map(
          ({ resource_uri }) => ({ resource_uri })
        );

        return api.get(abilities);
      }
    },
    attack: {
      type: GraphQLInt
    },
    catch_rate: {
      type: GraphQLInt
    },
    created: {
      type: GraphQLString
    },
    defense: {
      type: GraphQLInt
    },
    egg_cycles: {
      type: GraphQLInt
    },
    egg_groups: {
      type: new GraphQLList(new GraphQLObjectType({
        name: 'egg_groups',
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
    Egg: {
      type: new GraphQLList(Egg),
      resolve (parent, args) {
        const egg_groups = parent.egg_groups.map(
          ({ resource_uri }) => ({ resource_uri })
        );

        return api.get(egg_groups);
      }
    },
    ev_yield: {
      type: GraphQLString
    },
    evolutions: {
      type: new GraphQLList(new GraphQLObjectType({
        name: 'evolutions',
        fields: () => ({
          level: {
            type: GraphQLInt
          },
          method: {
            type: GraphQLString
          },
          resource_uri: {
            type: GraphQLString
          },
          to: {
            type: GraphQLString
          }
        })
      }))
    },
    Evolutions: {
      type: new GraphQLList(Pokemon),
      resolve (parent, args) {
        if (parent.evolutions.length === 0) {
          return [];
        }
        const evolutions = parent.evolutions.map(
          ({resource_uri}) => ({resource_uri})
        );

        return api.get(evolutions)
      }
    },
    exp: {
      type: GraphQLInt
    },
    growth_rate: {
      type: GraphQLString
    },
    happiness: {
      type: GraphQLInt
    },
    height: {
      type: GraphQLString
    },
    hp: {
      type: GraphQLInt
    },
    male_female_ratio: {
      type: GraphQLString
    },
    modified: {
      type: GraphQLString
    },
    moves: {
      type: new GraphQLList(new GraphQLObjectType({
        name: 'moves',
        fields: () => ({
          learn_type: {
            type: GraphQLString
          },
          name: {
            type: GraphQLString
          },
          resource_uri: {
            type: GraphQLString
          }
        })
      }))
    },
    Moves: {
      type: new GraphQLList(Move),
      resolve (parent, args) {
        const moves = parent.moves.map(
          ({resource_uri}) => ({resource_uri})
        );

        return api.get(moves);
      }
    },
    resource_uri: {
      type: GraphQLString
    },
    sp_atk: {
      type: GraphQLInt
    },
    sp_def: {
      type: GraphQLInt
    },
    speed: {
      type: GraphQLInt
    },
    species: {
      type: GraphQLString
    },
    total: {
      type: GraphQLInt
    },
    types: {
      type: new GraphQLList(new GraphQLObjectType({
        name: 'types',
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
    weight: {
      type: GraphQLString
    }
  })
});

export default Pokemon;
