import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {  View, StyleSheet,Platform,TouchableHighlight,Text } from 'react-native';
export default class Choose extends Component {
    constructor() {
      super();
      this.state = {
        
         }
      onPress = () => {
          this.setState({
            
          })
        }   
    } 
    render() {
        return (
          <View style={styles.container}>

            <TouchableHighlight
              style={styles.button}
              onPress={this.onPress}
              >
              <Text> nguoi kiem tra </Text>
            </TouchableHighlight>   
    
          </View>
        );
      }  
}
const styles = StyleSheet.create({




})