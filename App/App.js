import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const styles = StyleSheet.create({
    titulo:{

      fontSize: 20,
      color: '#707070'

    },
    menuUp:{

      flex:1 ,
      borderWidth:2 ,
      borderColor:'#707070' ,
      backgroundColor: '#4EFF72',
      flexDirection:'column', 
      alignContent:'center', 
      alignItems:'center', 
      justifyContent:'space-around'

    },
    menuCenter:{
      flex: 6
    },
    menuDown:{

      flex: 2, 
      borderWidth:2, 
      borderColor:'#707070',
      backgroundColor: '#4EFF72',
      justifyContent:'space-around'

    }
});


export default class LisaMetriApp extends Component {

  render() {
    return (
      <View style={{flex:1, alignContent:'stretch'}}>
          <View style = {styles.menuUp}>

                <View style = {{borderWidth:2 ,borderColor:'#707070' ,backgroundColor:'white', height:50, width:217, justifyContent:'space-around', alignContent:'center', alignItems:'center'}}>

                    <Text style = {styles.titulo}> LISA-METRI </Text>
                    
                </View>

          </View>

          <View style = {styles.menuCenter}>

          </View>

          <View style = {styles.menuDown}>

                  <Text style = {styles.titulo}> Contactos: </Text>
                  <Text style = {styles.titulo}> rsolano_17@alu.uabcs.mx </Text>
                  <Text style = {styles.titulo}> 612-15-468-45 </Text>

          </View>
      </View>
    );
  }
}

