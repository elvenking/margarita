// @flow

import { GraphQLInputObjectType, GraphQLList, GraphQLString } from 'graphql';

export default new GraphQLInputObjectType({
  name: 'LocationItineraryInput',
  fields: {
    slug: {
      description: 'Locations IDs for travel in a readable way',
      type: GraphQLList(GraphQLString),
    },
    ids: {
      description: 'Locations IDs for travel',
      type: GraphQLList(GraphQLString),
    },
  },
});
