import {
  GraphQLObjectType,
  GraphQLInt
} from 'graphql';

import pokeapi from 'pokeapi';
import {
  Pokemon,
  Ability,
  Move,
  Game,
  Sprite,
  Egg,
  Pokedex
} from './types/types';

const api = pokeapi.v1();

const Query = new GraphQLObjectType({
  name: 'queries',
  fields: {
    pokemon: {
      type: Pokemon,
      args: {
        id: {
          type: GraphQLInt
        }
      },
      resolve (parent, args) {
        return api.get('pokemon', args.id);
      }
    },
    ability: {
      type: Ability,
      args: {
        id: {
          type: GraphQLInt
        }
      },
      resolve (parent, args) {
        return api.get('ability', args.id);
      }
    },
    move: {
      type: Move,
      args: {
        id: {
          type: GraphQLInt
        }
      },
      resolve (parent, args) {
        return api.get('moves', args.id);
      }
    },
    game: {
      type: Game,
      args: {
        id: {
          type: GraphQLInt
        }
      },
      resolve (parent, args) {
        return api.get('game', args.id);
      }
    },
    sprite: {
      type: Sprite,
      args: {
        id: {
          type: GraphQLInt
        }
      },
      resolve (parent, args) {
        return api.get('sprite', args.id);
      }
    },
    egg: {
      type: Egg,
      args: {
        id: {
          type: GraphQLInt
        }
      },
      resolve (parent, args) {
        return api.get('egg', args.id);
      }
    },
    pokedex: {
      type: Pokedex,
      resolve () {
        return api.get('pokedex', 1);
      }
    }
  }
});

export default Query;
