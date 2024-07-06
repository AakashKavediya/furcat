import React from 'react'
import type { PropsWithChildren } from 'react'
import {View,Text, StyleSheet,Image,TouchableOpacity, Linking} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

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
                <Image style={styles.feed_image}  source={{uri:'https://i.pinimg.com/564x/28/2f/94/282f942daf2273e31f7396cd1852d43f.jpg'}} />
            </View>
            <View style={styles.social_links} >
                <TouchableOpacity onPress={() => openWebsite('https://www.facebook.com')} >
                    <Icon style={styles.links} name="facebook" size={28} color="#6AC6FF" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openWebsite('https://www.instagram.com')} >
                    <Icon style={styles.links} name="instagram" size={35} color="#C8006E" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openWebsite('https://www.snapchat.com')} >
                    <Icon style={styles.links} name="snapchat" size={35} color="#FFD817" />
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
})