// @flow

import {
  createStackNavigator,
  type NavigationState,
  type NavigationNavigator,
  type NavigationRouteConfigMap,
} from 'react-navigation';
import { Routes } from '@kiwicom/margarita-navigation';

import { BookingsListScreen, BookingDetailScreen } from '../screens';

type NavigationOptions = {};
type NavigationProps = {};

const StackNavigator: NavigationNavigator<
  NavigationState,
  NavigationOptions,
  NavigationProps,
> = createStackNavigator(
  ({
    [Routes.BOOKING_LIST]: {
      screen: BookingsListScreen,
      navigationOptions: {
        title: 'My Bookings',
      },
    },
    [Routes.BOOKING_DETAIL]: {
      screen: BookingDetailScreen,
      navigationOptions: {
        title: 'Booking details',
      },
    },
  }: NavigationRouteConfigMap),
);

export default StackNavigator;