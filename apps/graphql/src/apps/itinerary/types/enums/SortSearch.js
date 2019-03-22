// @flow

import { GraphQLEnumType } from 'graphql';

export default new GraphQLEnumType({
  name: 'SortSearchInput',
  values: {
    PRICE: {
      value: 'PRICE',
    },
    DURATION: {
      value: 'DURATION',
    },
    QUALITY: {
      value: 'QUALITY',
    },
    DATE: {
      value: 'DATE',
    },
    POPULARITY: {
      value: 'POPULARITY',
    },
  },
});
