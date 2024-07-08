import React from 'react';
import { useState } from 'react';
import { Image, StyleSheet, Platform, View, Text, ScrollView, StatusBar, SafeAreaView, TouchableOpacity, InputAccessoryView, TextInput } from 'react-native';
import Cards from '../components/feedCards';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Entypo } from '@expo/vector-icons';
import 'react-native-gesture-handler';
// import {Tabs} from 'expo-router';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Blue = () => {
  return (
      <View style={styles.container} >
      {/* <SafeAreaView> */}
      {/* <StatusBar  /> */}
{/* <View style={styles.header} >
   <TouchableOpacity style={styles.bars} ><Entypo style={styles.bar}  name="user" size={30} color="white" /></TouchableOpacity>
    <Text style={styles.heading}>Blue Bird</Text>
    </View> */}
    <ScrollView style={styles.scrollview} >
      <View style={styles.thoughts} >
        <View style={styles.profile_pic} >
          <Image style={styles.profile_pic_img} source={{uri:'https://i.pinimg.com/736x/dd/d7/7a/ddd77afb49874045ca4f05b5ac113747.jpg'}} />
        </View>
        <View style={styles.profile_input} >
          <TextInput
        style={styles.input}
        placeholder="your thoughts today?"
        placeholderTextColor={'cyan'}
        // onChangeText={setText}
        // value={text}
      />
        </View>
      </View>
      <View>
        <View style={styles.view_image} ><Image style={styles.profile_image} /></View>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </View>
    </ScrollView>
    {/* </SafeAreaView> */}
    
    </View>
  )
}

export default Blue

const styles = StyleSheet.create({
    container:{
    // paddingTop:20,
  },
  profile_pic_img:{
    height:40,
    width:40,
    borderRadius:20,
  },
  input: {
    marginLeft:5,
    padding:5,
    borderColor: 'whitesmoke',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 20,
    width: 280,
    flex:1,
    color:'white',
    textAlign:'left',
    alignItems:'flex-start',
    justifyContent:'flex-start'
  },
  profile_input:{},
  profile_pic:{},
  thoughts:{
    flex:1,
    flexDirection:'row',
    width:'90%',
    marginHorizontal:'auto',
    alignItems:'center',
  },
//   heading:{
//     backgroundColor:'black',
//     color:'white',
//     fontSize:35,
//     fontWeight:'bold',
//     marginLeft:10,
//   },
  view_image:{},
  profile_image:{},
  scrollview:{
    backgroundColor:'black',
    height:'100%',
    // marginTop:'6%'
  },
//   header:{
//     // flex:1,
//     flexDirection:'row',
//     // padding:20,
//     paddingHorizontal:30,
//     backgroundColor:'#000000',
//     alignItems:'center',
//     height:'10%',
//     position:'relative',
//   },
  bars:{},
//   bar:{
//     color:'black',
//     fontSize:25,
//     fontWeight:'bold',},

})

