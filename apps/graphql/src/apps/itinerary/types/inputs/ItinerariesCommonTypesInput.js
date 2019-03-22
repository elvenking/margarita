// @flow

import {
  GraphQLInputObjectType,
  GraphQLEnumType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import { GraphQLDate } from 'graphql-iso-date';

import PassengersInput from './common/PassengersInput';

const DateRange = new GraphQLInputObjectType({
  name: 'DateRange',
  fields: {
    start: {
      type: GraphQLNonNull(GraphQLDate),
      description: 'Start of the date range',
    },
    end: {
      type: GraphQLDate,
      description: 'End of the date range',
    },
  },
});

const SortSearchInput = new GraphQLEnumType({
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

const OrderSearchInput = new GraphQLEnumType({
  name: 'OrderSearchInput',
  values: {
    ASC: {
      value: 'ASC',
    },
    DESC: {
      value: 'DESC',
    },
  },
});

const LocationItineraryInput = new GraphQLInputObjectType({
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

const ItineraryCommonInputFields = {
  origin: {
    description: 'Origin of the flight',
    type: GraphQLNonNull(LocationItineraryInput),
  },
  destination: {
    description: 'Destination of the flight',
    type: LocationItineraryInput,
  },
  outboundDate: {
    description: 'Date Range of departure',
    type: GraphQLNonNull(DateRange),
  },
};

const ItineraryCommonSearchInputFields = {
  order: {
    description: 'Order of the search',
    type: OrderSearchInput,
  },
  sort: {
    description: 'Sorting of the search',
    type: SortSearchInput,
  },
  passengers: {
    description: 'How many passengers are travelling',
    type: PassengersInput,
  },
};
export {
  LocationItineraryInput,
  OrderSearchInput,
  SortSearchInput,
  ItineraryCommonInputFields,
  ItineraryCommonSearchInputFields,
};
