import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    titulo:{
      fontSize: 20
    },

});


export default class HelloWorldApp extends Component {

  render() {
    return (
      <View style={{flex:1, alignContent:'stretch'}}>
          <View style = {{flex:1, backgroundColor: 'green', flexDirection:'column', alignContent:'center', alignItems:'center', justifyContent:'space-around'}}>

                <View style = {{backgroundColor:'white', height:30, justifyContent:'space-around', alignContent:'center', alignItems:'center'}}>

                    <Text style = {styles.titulo}> LISA-METRI </Text>
                    
                </View>

          </View>

          <View style = {{flex: 6}}>

          </View>

          <View style = {{flex: 2, backgroundColor: 'green'}}>

          </View>
      </View>
    );
  }
}

