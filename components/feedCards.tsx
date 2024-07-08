import React from 'react'
import type { PropsWithChildren } from 'react'
import {View,Text, StyleSheet,Image,TouchableOpacity, Linking} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';


type IconsProps = PropsWithChildren<{
    name: string
}>

export default function Cards(){

    function openWebsite(websiteLink:string){
      Linking.openURL(websiteLink)
    }

    return(
     <View style={styles.card} >
        <View style={styles.profile} >
            <View style={styles.profile_img} >
                <Image style={styles.profile_image}  source={{uri:'https://i.pinimg.com/564x/40/65/8e/40658e93522a8ac9c41f9c22ad63c7e5.jpg'}} />
                <Text style={styles.username} >Fur Cat</Text>
            </View>
            <View style={styles.feed} >
                <Image style={styles.feed_image}  source={{uri:'https://i.pinimg.com/564x/95/56/3c/95563c5c1e38382a10127343459376f5.jpg'}} />
            </View>
            <View>
                <Text style={styles.bold} >The funny cat!</Text>
                <Text style={styles.normal}>When you want to be both lazy and productive at the same time.</Text>
            </View>
            <View style={styles.social_links} >
                <TouchableOpacity onPress={() => openWebsite('https://www.facebook.com')} >
                    <FontAwesome style={styles.facebook} name="facebook-f" size={30} color="#00AEFF" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openWebsite('https://www.instagram.com')} >
                       <FontAwesome style={styles.instagram} name="instagram" size={28} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openWebsite('https://www.snapchat.com')} >
                    <FontAwesome style={styles.snapchat} name="snapchat-ghost" size={30} color="white" /> 
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.linking} >
                    <Text style={styles.linking_text} >Follow!</Text>
                </TouchableOpacity>
            </View>
        </View>
     </View>   
    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:'#1C1C1C',
        padding:10,
        margin:10,
        borderRadius:20,
        minHeight:350,
        paddingVertical:10,
     },
    profile:{
    },
    profile_img:{
        flex:1,
        flexDirection:'row',
        textAlign:'center',
        alignItems:'center',
        paddingStart:10,
        paddingTop:5,
        paddingBottom:5,

    },
    profile_image:{
        height:40,
        width:40,
        borderRadius:25,
    },
    username:{
        fontSize:36,
        fontWeight:'bold',
        color:'white',
        padding:5,
        marginLeft:5,
        
    },
    feed:{},
    feed_image:{
        minHeight:250,
        maxHeight:300,
        borderRadius:20,
        padding:5,
        margin:5,
    },
    social_links:{
        flex:1,
        alignItems:'center',
        padding:5,
        flexDirection:'row'       
    },
    links:{
        padding:5,
        marginRight:5,
    },
    linking:{padding:5},
    linking_text:{
        padding:10,
        fontSize:30,
        fontWeight:'bold',
        color:'white',
        backgroundColor:'black',
        borderRadius:20,
        flex:1,
        textAlign:'center',
        justifyContent: 'center',
    },
    facebook:{
        backgroundColor:'white',
        borderRadius:8,
        padding:5,
        width:35,
        paddingHorizontal:8,
        height:35,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        margin:5,
    },
    instagram:{
        backgroundColor:'#FB1A61',
        borderRadius:8,
        padding:5,
        width:35,
        paddingHorizontal:6,
        paddingBottom:5,
        height:35,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        margin:5,
    },
    snapchat:{
        backgroundColor:'#FFAE00',
        borderRadius:8,
        padding:5,
        width:35,
        paddingHorizontal:3,
        height:35,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        margin:5,
    },
    bold:{ color:'white',
    fontSize:20,
    fontWeight:'bold',
    paddingLeft:8,
    marginTop:10,},
    normal:{
        color:'whitesmoke',
    fontSize:15,
    fontWeight:'normal',
    paddingLeft:8,
    marginVertical:5,

    },
})