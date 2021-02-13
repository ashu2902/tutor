import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Dimensions,StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';



export default class LandingPageTutor extends Component  {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render (){
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      
        <Text style={{fontSize:40,}}>Register as a </Text>
        <Text style={{fontSize:45,color:'darkred'}}>Tutor</Text>
        <TouchableOpacity  style={{backgroundColor:'firebrick',width:wp('50%'),height:hp('6.5%'),marginTop:55,borderRadius:20,justifyContent:'center',alignItems:'center',}}>
            <Text style={{color:'white',fontSize:22}}>Next</Text>
            </TouchableOpacity>
        <TouchableOpacity onPress = {() =>  this.props.navigation.goBack()} style={styles.buttonCategory}>
          <Ionicons style={{}} name="chevron-up-outline" size={hp('5%')} color='white' />
        </TouchableOpacity>  
      

    </View>
  );
} }

const styles = StyleSheet.create({

    buttonCategory: {
        top:hp('37%'),height:hp('9%'),width:wp('25%'),
        alignItems:'center',justifyContent:'center',backgroundColor:'firebrick',
        borderTopEndRadius:50,borderTopStartRadius:50

    }
  
});
