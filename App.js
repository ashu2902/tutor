import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Dimensions,StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';

class App extends Component {
  render (){
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      
        <Text style={{fontSize:40,}}>Register as a </Text>
        <Text style={{fontSize:45,color:'royalblue'}}>Student</Text>
        <TouchableOpacity style={{backgroundColor:'dodgerblue',width:wp('50%'),height:hp('6.5%'),marginTop:55,borderRadius:20,justifyContent:'center',alignItems:'center'}}><Text>Next</Text></TouchableOpacity>
        <TouchableOpacity style={{top:hp('37%'),height:hp('8%'),width:wp('25%'),alignItems:'center',justifyContent:'center',backgroundColor:'royalblue',borderTopEndRadius:50,borderTopStartRadius:50}}><Ionicons style={{}} name="chevron-up-outline" size={32}  /></TouchableOpacity>  
      

    </View>
  );
} }

const styles = StyleSheet.create({
  
});
export default App;