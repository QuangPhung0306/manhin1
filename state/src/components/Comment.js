import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {TextInput, View, StyleSheet,Platform, Text } from 'react-native';
export default class Comment extends Component {
    constructor() {
        super();
        this.state = {
            comment :'',
      
        }
         
     }
    render (){
        (
            <View style={styles.container}>

              <Text > comment </Text>

              <TextInput
                  value={this.state.comment}
                  title={'comment'}
                  onChangeText={(comment) => this.setState({ comment })}
                  placeholder={'comment'}
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