import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';


const SignIn = ({ navigation }) => {
  return (
    <View style={styles.SignInContainer}>
      <Image
          source={require('../assets/background2.png')}
          style={styles.signinimg}
      />
      <Text style={styles.title}>
        Get your groceries 
      </Text>
      <Text style={styles.title1}>
        with nectar
      </Text>
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/icon2.png')}
          style={styles.phoneIcon}
        />
        <Text style={styles.countryCode}>+880</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
          onFocus={() => navigation.navigate('Number')} 
        />
      </View>
      <Text style={styles.socialMediaText}>Or connect with social media</Text>
      <View style={styles.buttonContainer}>
      
        <TouchableOpacity style={styles.googleButton} onPress={() => navigation.navigate('Number')}>
          <View style={styles.socialButton}>
            <Image
              source={require('../assets/gg.png')}
              style={styles.iconGG}
            />
            <Text style={styles.ggbtnText}>Continue with Google</Text>
          </View>
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.facebookButton} onPress={() => navigation.navigate('Number')}>
          <View style={styles.socialButton}>
            <Image
              source={require('../assets/face.png')}
              style={styles.iconFB}
            />
            <Text style={styles.fbbtnText}>Continue with Facebook</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    SignInContainer:{
      flex:1,
      backgroundColor: '#fcfcfc',
      position:'relative'
    },
    signinimg: {
      width: 413,
      height: 374,
      backgroundColor: '#fcfcfc',
    },
    title: {
      marginTop: 400,
      marginLeft: 25,
      fontFamily: 'Gilroy',
      fontWeight: 600,
      fontSize: 26,
      lineHeight: 29,
      letterSpacing: 0,
      color: ' #030303',
      position:'absolute'
    },
    title1: {
      marginTop: 430,
      marginLeft: 25,
      fontFamily: 'Gilroy',
      fontWeight: 600,
      fontSize: 26,
      lineHeight: 29,
      letterSpacing: 0,
      color: ' #030303',
      position:'absolute'
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 490,
      marginLeft: 25,
      position: 'absolute',
      borderBottomWidth: 1,
      borderColor: '#E2E2E2',
    },
    phoneIcon: {
      width: 24,
      height: 24,
      marginRight: 10,
    },
    countryCode: {
      fontSize: 18,
      marginLeft: 10,
      marginRight: 10,
    },
    input: {
      width: 330,
      height: 39.550201416015625,
    },
    socialMediaText: {
      fontSize: 16,
      color: '#888',
      position: 'absolute',
      width: 220,
      height: 17,
      marginTop: 565,
      marginLeft: 100,
    },
    buttonContainer: {
      flex: 1,
      justifyContent: 'center',
      marginLeft:30
    },
  
    socialButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    },
  
    googleButton: {
      width: 364,
      height: 67,
      backgroundColor:'#5683e8',
      borderRadius: 15,
      position:'absolute',
    },
  
    iconGG: {
      top: 1,
      left: -40,
      width: 20,
      height: 20,
      marginRight: 5,
    }, 
  
    ggbtnText:{
      color:'white',
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 600,
      paddingTop: 5,
    },
  
    facebookButton: {
      width: 364,
      height: 67,
      backgroundColor: '#4b66a9',
      borderRadius: 15,
      marginTop:150
    },
  
    iconFB: {
      top: 1,
      left: -30,
      width: 12,
      height: 25,
      marginRight: 5,
    },
  
    fbbtnText: {
      color:'white',
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 600,
      paddingTop: 5,
    },
});

export default SignIn;