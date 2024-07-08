import { StyleSheet, Text, View,ScrollView,Image } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <ScrollView style={styles.scrollview} >
        <View style={styles.profile} >
            <Image style={styles.profile_pic} source={{uri:'https://i.pinimg.com/564x/0f/60/a9/0f60a9138a3b597ce802fdace94c9fc9.jpg'}} />
            <Text style={styles.profile_name} >Kitty Cat</Text>
        </View><View style={styles.hr}></View>
        <View style={styles.about} >
            <View style={styles.block} >
                <Text style={styles.bold} >Username:</Text>
                <Text style={styles.normal} >Artistic_Syntax</Text>
            </View>
                        <View style={styles.block} >
                <Text style={styles.bold} >About:</Text>
                <Text style={styles.normal} >Blue Bird user, Content creator, Never Give up</Text>
            </View>
                        <View style={styles.block} >
                <Text style={styles.bold} >Instagram:</Text>
                <Text style={styles.normal} >akki928</Text>
            </View>
                        <View style={styles.block} >
                <Text style={styles.bold} >Facebook:</Text>
                <Text style={styles.normal} >Aakash_Kavediya</Text>
            </View>
                        <View style={styles.block} >
                <Text style={styles.bold} >SnapChat</Text>
                <Text style={styles.normal} >ShakalKandi</Text>
            </View>
        </View>
    </ScrollView>
  )
}

export default Profile

const styles = StyleSheet.create({
    scrollview:{
        backgroundColor:'#1C1C1C'
    },
    profile:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:250,

    },
    profile_pic:{
        height:130,
        width:130,
        borderRadius:65,
        borderWidth:3,
        borderColor:'white'
    },
    profile_name:{
        color:'white',
        fontSize:40,
        fontWeight:'bold',
    },
    hr:{
        height:1,
        width:'90%',
        backgroundColor:'whitesmoke',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:15,
        marginLeft:'5%',
    },
    about:{paddingHorizontal:20},
    block:{padding:5,
        flexDirection:'column',
        marginTop:10,
        minWidth:200,
        maxWidth:250,
    },
    bold:{fontSize:25,
        fontWeight:'bold',
        color:'white',
    },
    normal:{
        fontSize:20,
        fontWeight:'normal',
        color:'whitesmoke',
    },
})