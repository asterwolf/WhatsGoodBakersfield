import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { List, ListItem } from 'react-native-elements';

class activities extends Component {
  EntertainmentPress = () => {
    this.props.navigation.navigate('Entertainment');
  };
  BarsPress = () => {
    this.props.navigation.navigate('Bars');
  };
  CafesPress = () => {
    this.props.navigation.navigate('Cafes');
  };
  LibrariesPress = () => {
    this.props.navigation.navigate('Libraries');
  };
  RestaurantsPress = () => {
    this.props.navigation.navigate('Restaurants');
  };
  BakeriesPress = () => {
    this.props.navigation.navigate('Bakeries');
  };

  render() {
    return (
      <ScrollView>
      <List>
        <ListItem
          title="entertainment"
          onPress={this.EntertainmentPress}
        />
        <ListItem
          title="bars"
          onPress={this.BarsPress}
        />
        <ListItem
          title="restaurants"
          onPress={this.RestaurantsPress}
        />
        <ListItem
          title="bakeries"
          onPress={this.BakeriesPress}
        />
        <ListItem
          title="cafes"
          onPress={this.CafesPress}
        />
        <ListItem
          title="libraries"
          onPress={this.LibrariesPress}
        />
      </List>
      </ScrollView>
    );
  }
}

export default activities;
