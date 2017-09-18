import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {Grid, Row, Col} from 'react-native-elements';

class favorites extends Component {
  render() {
    return (
      <ScrollView>
        <Grid>
          <Col>
            <Row style = {styles.container}>
            </Row>
            <Row style = {styles.container2}>
            </Row>
            <Row style = {styles.container3}>
            </Row>
          </Col>
          <Col>
            <Row style = {styles.container3}>
            </Row>
            <Row style = {styles.container}>
            </Row>
            <Row style = {styles.container2}>
            </Row>
          </Col>
          <Col>
            <Row style = {styles.container2}>
            </Row>
            <Row style = {styles.container3}>
            </Row>
            <Row style = {styles.container}>
            </Row>
          </Col>
        </Grid>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff564',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 150
  },
  container2: {
    flex: 1,
    backgroundColor: '#648598',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 150
  },
  container3: {
    flex: 1,
    backgroundColor: '#83f452',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 150
  },

});

export default favorites;
