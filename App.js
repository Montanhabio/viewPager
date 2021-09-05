import React, {Component} from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import PagerView from 'react-native-pager-view';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default class App extends Component{

  render(){

    return(
      <View style={{flex: 1, marginTop:70}}>
        <View style={styles.page}>
          <Image source={require('./src/images/title.png')}/>
        </View>
        
        <PagerView 
          style={{height:450}}
          initialPage={0}>
        <View style={styles.page} key="1">
           <Image source={require('./src/images/dalton_page.png')}/>
        </View>
        <View style={styles.page} key="2">
        <Image 
           source={require('./src/images/thomsom_page.png')}/>
        </View>
        <View style={styles.page} key="3">
        <Image 
           source={require('./src/images/rutherford_page.png')}/>
        </View>    
        <View style={styles.page} key="4">
        <Image 
           source={require('./src/images/bohr_page.png')}/>
        </View> 
        <View style={styles.page} key="5">
        <Image 
           source={require('./src/images/schrodinger_page.png')}/>
        </View> 
        </PagerView>
      </View>

    )
  }
} 

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },

  page: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:5
  },

  titulo: {
    fontWeight: 'bold',
    fontSize: 26,
    textAlign:'center',
    color: 'blue'
},
});


