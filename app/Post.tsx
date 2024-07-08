import React from 'react';
import { View, Text, TextInput, StyleSheet, Image,TouchableOpacity } from 'react-native';
// import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const MemeCard = () => {
  return (
    <View style={styles.container} >
    <View style={styles.card}>
      {/* <Card containerStyle={styles.card}> */}
        <Image 
          source={{ uri: 'https://i.pinimg.com/564x/75/9b/db/759bdb0bbc3d7356310d50128518e1dc.jpg' }} 
          style={styles.image}
        />
        <View style={styles.inputContainer}>
            <Text style={styles.bold} >Header:</Text>
          <TextInput
            placeholder="Enter text"
            style={styles.input}
            placeholderTextColor={'gray'}
          />

        </View>
        
        <View style={styles.inputContainer}>
            <Text style={styles.bold} >Description:</Text>
          <TextInput
            placeholder="Enter text"
            style={styles.input}
            placeholderTextColor={'gray'}
          />

          
        </View>
        <View>
            <TouchableOpacity style={styles.TouchableOpacity}>
                <Text style={styles.post} >Post!</Text>
            </TouchableOpacity>
        </View>
      {/* </Card> */}
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    padding:10,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    borderRadius: 15,
    paddingTop:30,
    paddingBottom:0,
  },
  image: {
    width: '95%',
    minHeight: 200,
    maxHeight:400,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  inputContainer: {
    flexDirection: 'column',
    // alignItems: 'center',
    margin: 5,
    
  },
  input: {
    // flex: 1,
    fontSize: 16,
    padding: 10,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    width:300,
    color:'white',
  },
  post:{
    width:200,
    height:40,
    padding:10,
    borderRadius:10,
    backgroundColor:'orange',
    justifyContent:'center',
    textAlign:'center',
  },
  bold:{
    color:'white',
    fontSize:28,
    fontWeight:'bold',
    marginBottom:8,
    marginTop:10,
  },
  TouchableOpacity:{
    margin:20,
  },
});

export default MemeCard;
