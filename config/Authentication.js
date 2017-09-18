import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';

class Authentication extends Component {
  GetToken() {
    return fetch('https://api.yelp.com/oauth2/token', {
      method: 'POST',
      body: JSON.stringify({
        client_id: 'wgDpdHHou5zVH1gKL2lY9w',
        client_secret: 'VbViSUnEagjXt58Ob1QGau0ObjKTH5ImgYpo4k1o8gqabf2jYDPGlbYOhiIiQiQl',
      })
    })
    .then((response) => response.json())
      .then((responseJson) => {
        this.access_token = responseJson.access_token;
        this.token_type = responseJson.token_type;
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <GetToken/>
    );
  }
}

export default Authentication;
