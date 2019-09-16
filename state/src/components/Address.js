import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {  TextInput, View, StyleSheet,Platform, Picker, Item,Text } from 'react-native';
export default class Address extends Component {
    constructor(){
        super();
        this.state= {
            choosenIndex: 0 ,


        }
    }
    render() {
        const options = ['hcm', 'hn', 'tokyo', 'bussan', 'bac kinh']
        return (
          <View style={styles.container}>
            <Text> Dia Diem </Text>
            <Picker style={styles.pickerStyle}
                    placeholder={'address'}  
                    selectedValue={this.state.language}  
                    onValueChange={(itemValue, itemPosition) =>  
                    this.setState({language: itemValue, choosenIndex: itemPosition})}  
                          >  
              <Picker.Item label="ha noi" value="hn" />  
              <Picker.Item label="ho chi minh" value="hcm" />  
              <Picker.Item label="da nang" value="dn" />
              <Picker.Item label="tokyo" value="tk" />  
              <Picker.Item label="bussan" value="bs" />    
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





