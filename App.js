import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Dimensions,StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';
import LandingPageStudent from './student/studentLanding';
import LandingPageTutor from "./tutor/tutorLandingPage";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const navigator = createStackNavigator({



  tutorLanding: LandingPageTutor,
  studentLanding: LandingPageStudent
}, 
{
  initialRouteName: 'tutorLanding',
  defaultNavigationOptions: {
    headerShown: false,
  }
}
)

// class App extends Component {

 

//   render (){
//   return (
//     <NavigationContainer>
//       {/* < LandingPageStudent/>,
//     <LandingPageTutor/> */}
    
//      </NavigationContainer>
    
//   );
// } }

const styles = StyleSheet.create({
  
});
export default createAppContainer(navigator);