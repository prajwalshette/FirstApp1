import { StyleSheet, Text, View, TextInput, Pressable, Image} from 'react-native'
import React, {useContext, useState} from 'react'
// import PhoneInput from 'react-native-phone-number-input'
import axios from 'axios';
import indiaflag from '../assets/india.png'

// navigation
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackParamList} from '../App'
// import { Button } from '@rneui/themed';

type SignupScreenProps = NativeStackScreenProps<RootStackParamList, 'Signup'>


const Signup = ({navigation}: SignupScreenProps) => {

    const [name, setName] = useState ('')
    const [number, setNumber] = useState('')


    const handleSignup = async () => {
      try {
         
        const response = await axios.post('http://localhost:5000/api/user/register',
          {
            name: name,
            number: number,
          });
        console.log(response.data);
        // const response = await fetch("http://localhost:5000/");
        // console.log(response);
        
        // navigation.navigate('LoginVerification');
        navigation.navigate('RegisterVerification', { name: name, number: number });
      } catch (error) { 
        console.log(error);
      }
    };
  

     
    
  return (

    <View style={styles.formContainer}>
       <Text style={styles.appName}>Create Account</Text>
      <TextInput
        placeholderTextColor={'#AEAEAE'}
        placeholder="Enter Your Name"
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
      />

       {/* Mobile Number */}
      <View style={styles.numbercontainer}>
           <View style={styles.bb}></View>
          <Image source={indiaflag} style={styles.flagImage} />
          <Text style={styles.countryCode}>+91</Text>
          <TextInput
            placeholderTextColor={'#AEAEAE'}
            placeholder="Enter Your Number"
            style={styles.inputnumber}
            value={number}
            onChangeText={(text) => setNumber(text)}
          />
      </View>

     {/* Signup button */}
     <Pressable
        onPress={handleSignup}
        style={styles.btn}>
        <Text style={styles.btnText}>Sign Up</Text>
      </Pressable>

      <Text style={styles.otpText}>we will send you the 6 digit verification code</Text>

       {/* Login navigation */}
       <Pressable
        onPress={() => navigation.navigate('Login')}
        style={styles.loginContainer}>
        <Text style={styles.haveAccountLabel}>
          Already have an account?{'  '}
          <Text style={styles.loginLabel}>Login</Text>
        </Text>
      </Pressable>

    </View>
 
  )
}



const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
      },
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
      },
      formContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        height: '100%',
        backgroundColor: '#FFFFFF'
      },
      appName: {
        color: '#f02e65',
        fontSize: 40,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 20,
      },
      input: {
        backgroundColor: '#fef8fa',
        padding: 10,
        height: 40,
        alignSelf: 'center',
        borderRadius: 5,
        fontSize: 17,
    
        width: '80%',
        color: '#000000',
    
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 1,
    },
    btn: {
        backgroundColor: '#ffffff',
        padding: 10,
        height: 45,
    
        alignSelf: 'center',
        borderRadius: 5,
        width: '80%',
        marginTop: 10,
    
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    
        elevation: 3,
      },
      btnText: {
        color: '#484848',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 18,
      },
      loginContainer: {
        marginTop: 60,
      },
      haveAccountLabel: {
        color: '#484848',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 15,
      },
      loginLabel: {
        color: '#1d9bf0',
      },
      otpText:{
        // color: '#000000',
        color: '#888888',
        paddingTop: 5,
        textAlign: 'center',  
        alignSelf: 'center', 
      },
      

          
    numbercontainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
      marginHorizontal: 35,
      width: '80%',
      // borderWidth: 1,
      // borderColor: '#AEAEAE',
      borderRadius: 5,
      backgroundColor: '#fef8fa'
    },
    flagImage: {
      width: 20, 
      height: 15,  
      marginRight: 5, 
      // paddingLeft: 50
    },
    countryCode: {
      fontSize: 16,  
      marginRight: 5,
      color: '#000000'
    },
    inputnumber: {
      flex: 1,  
      // borderWidth: 1,
      // borderColor: '#AEAEAE',
      padding: 10,
      // borderRadius: 5,
      color: '#000000',
      fontSize: 17
    
    },
    bb: {
      marginLeft: 10
    }
     

});

export default Signup



 