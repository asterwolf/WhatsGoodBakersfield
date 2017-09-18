import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { List, ListItem, FormLabel, FormInput, SocialIcon  } from 'react-native-elements';
import { Authentication } from '../config/Authentication';

class entertainment extends Component {

  render() {
    return (
        <SocialIcon
          title='Sign In With Facebook'
          button
          type='facebook'
        />
    );
  }
}

export default entertainment;
