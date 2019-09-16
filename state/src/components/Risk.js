import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {  TextInput, View, StyleSheet,Platform, Picker, Item,Text } from 'react-native';
export default class Risk extends Component {
    constructor(){
        super();
        this.state= {
            choosenIndex: 0 ,

        }
    }
    render() {
        const options = ['quan ly', 'nguoi sua 1', 'nguoi sua 2', 'nguoi sua 3']
        return (
          <View style={styles.container}>
            <Text> RISK </Text>
            <Picker style={styles.pickerStyle} 
                    selectedValue={this.state.language}  
                    onValueChange={(itemValue, itemPosition) =>  
                    this.setState({language: itemValue, choosenIndex: itemPosition})}  
                          >  
              <Picker.Item label="quan ly" value="ql" />  
              <Picker.Item label="nguoi sua 1" value="ns1" />  
              <Picker.Item label="nguoi sua 2" value="ns2" />
              <Picker.Item label="nguoi sua 3" value="ns3" />  
              <Picker.Item label="nguoi sua 4" value="ns4" />    
            </Picker> 
          </View>
        );
      }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        alignItems :'center',

    },
    input:{
        height: 150,  
        width: "80%",  
        color: '#344953',  
        justifyContent: 'center',
        
    }

})

