import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, Image,Button} from 'react-native';

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
       <Button
          title={'Submit'}
          style={styles.input}
          
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F035E0',
    height: MARGIN,
    borderRadius: 20,
    zIndex: 100,
  },
 
});
