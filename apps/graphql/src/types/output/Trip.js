// @flow

import { GraphQLObjectType, GraphQLInt } from 'graphql';

import GraphQLRouteStop from './RouteStop';
import { differenceInMinutes } from '../../dataloaders/itinerariesHelpers';
import type { Booking } from '../../dataloaders/bookingsLoader/BookingFlowTypes';
import FromToInterface from './FromToInterface';
import GraphQLBookingType from './BookingType';

export default new GraphQLObjectType({
  name: 'Trip',
  interfaces: [FromToInterface],
  description:
    'Single travel from origin to destination, with possible stopovers.',
  fields: {
    departure: {
      type: GraphQLRouteStop,
      resolve: ({ departure }: Booking) => departure,
    },

    arrival: {
      type: GraphQLRouteStop,
      resolve: ({ arrival }: Booking) => arrival,
    },

    duration: {
      type: GraphQLInt,
      resolve: ({ departure, arrival }: Booking) => {
        const departureRawTime = parseInt(departure?.time?.utc, 10) ?? 0;
        const arrivalRawTime = parseInt(arrival?.time?.utc, 10) ?? 0;
        const departureTimeMs = departureRawTime * 1000;
        const arrivalTimeMs = arrivalRawTime * 1000;

        return differenceInMinutes(departureTimeMs, arrivalTimeMs);
      },
    },
    type: {
      type: GraphQLBookingType,
    },
  },
});