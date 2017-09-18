import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Feed from '../screens/feed';
import Favorites from '../screens/favorites';
import Recommended from '../screens/recommended';
import Activities from '../screens/activities';
import Entertainment from '../screens/entertainment';
import Bars from '../screens/bars';
import Cafes from '../screens/cafes';
import Bakeries from '../screens/bakeries';
import Libraries from '../screens/libraries';
import Restaurants from '../screens/restaurants';

export const FeedStack = StackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      title: 'What\'s Good Bakersfield',
    },
  },
  Activities: {
    screen: Activities,
    navigationOptions: {
      title: 'Activities',
    },
  },
  Entertainment: {
    screen: Entertainment,
    navigationOptions: {
      title: 'Entertainment',
    },
  },
  Bars: {
    screen: Bars,
    navigationOptions: {
      title: 'Bars',
    },
  },
  Cafes: {
    screen: Cafes,
    navigationOptions: {
      title: 'Cafes',
    },
  },
  Bakeries: {
    screen: Bakeries,
    navigationOptions: {
      title: 'Bakeries',
    },
  },
  Restaurants: {
    screen: Restaurants,
    navigationOptions: {
      title: 'Restaurants',
    },
  },
  Libraries: {
    screen: Libraries,
    navigationOptions: {
      title: 'What\'s Good Bakersfield',
    },
  },
});

export const Tabs = TabNavigator({
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  },
  Favorties: {
    screen: Favorites,
    navigationOptions: {
      tabBarLabel: 'Favorites',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
  Recommended: {
    screen: Recommended,
    navigationOptions: {
      tabBarLabel: 'Recommended',
      tabBarIcon: ({ tintColor }) => <Icon name="star" size={35} color={tintColor} />
    },
  },
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});
