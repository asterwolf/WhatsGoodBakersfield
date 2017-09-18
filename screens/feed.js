import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { sideOfTown } from '../config/data';

class feed extends Component {
  activitiesPress = () => {
    this.props.navigation.navigate('Activities');
  };

  render() {
    return (
      <ScrollView>
        <List>
          {sideOfTown.map((location) => (
            <ListItem
              key={location.location.side}
              roundAvatar
              avatar={{ uri: location.picture}}
              title={`${location.location.side.toUpperCase()}`}
              onPress={this.activitiesPress}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}


export default feed;
