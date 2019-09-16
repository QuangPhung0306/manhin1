import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {TextInput, View, StyleSheet,Platform, Text } from 'react-native';
export default class tag extends Component {
    constructor() {
        super();
        this.state = {
            tag :'',
      
        }
         
     }
    render (){
        (
            <View style={styles.container}>

              <Text > TAG </Text>

              <TextInput
                  value={this.state.tag}
                  //title={'comment'}
                  onChangeText={(tag) => this.setState({ tag })}
                  //placeholder={'comment'}
                  style={styles.input}
                /> 

            </View>
          );
    }       

}
const styles = StyleSheet.create({
    container:{
        flex :1,
        flexDirection: 'row',
        alignItems :'center',

    },
    input:{
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,

    },
})