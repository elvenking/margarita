// @flow

import {
  createStackNavigator,
  type NavigationState,
  type NavigationNavigator,
  type NavigationRouteConfigMap,
} from 'react-navigation';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { Routes } from '@kiwicom/margarita-navigation';

import { SearchScreen, ResultsScreen, PlacePickerScreen } from '../screens';

type NavigationOptions = {};
type NavigationProps = {};

const StackNavigator: NavigationNavigator<
  NavigationState,
  NavigationOptions,
  NavigationProps,
> = createStackNavigator(
  ({
    [Routes.SEARCH]: {
      screen: SearchScreen,
    },
    [Routes.RESULTS]: {
      screen: ResultsScreen,
    },
    [Routes.PLACE_PICKER]: {
      screen: PlacePickerScreen,
    },
  }: NavigationRouteConfigMap),
  {
    defaultNavigationOptions: {
      headerTintColor: defaultTokens.paletteProductNormal,
    },
  },
);

export default StackNavigator;
