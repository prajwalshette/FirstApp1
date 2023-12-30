import React, {useRef, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

// navigation
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackParamList} from '../App'

type LoginVerification = NativeStackScreenProps<RootStackParamList, 'LoginVerification'>

const LoginVerification = ({navigation, route}: LoginVerification) => {

    const { number } = route.params;
    const firstInput = useRef<TextInput>(null);
    const secondInput = useRef<TextInput>(null);
    const thirdInput = useRef<TextInput>(null);
    const fourthInput = useRef<TextInput>(null);
    const fifthInput = useRef<TextInput>(null);
    const sixthInput = useRef<TextInput>(null);
    const [otp, setOtp] = useState({ 1: '', 2: '', 3: '', 4: '', 5: '', 6: '' });

    const handleVerification = async () => {
      try {
        const response = await axios.post('http://localhost:5000/api/user/login/verify', {
          number: number,
          otp: Object.values(otp).join(''),
        });
        console.log(response.data);
        navigation.navigate('Home');
      } catch (error) {
        console.error(error);
      }
    };


     // send again otp

    const handleSendAgain = async () => {
      try {
         
        const response = await axios.post('http://localhost:5000/api/user/login',
          {
            number: number,
          });
        console.log(response.data);
        // const response = await fetch("http://localhost:5000/");
        // console.log(response);
        
        navigation.navigate('LoginVerification', { number: number });
      } catch (error) { 
        console.log(error);
      }
    };

  return (
     <View style={styles.container}>
      
          <Text style={styles.title}>Account Verification</Text>
          <Text style={styles.sixDigit}>Enter the 6-Digit PIN sent to you</Text>
          <Text style={styles.content}>
            PIN sent to phone number {' '}
            <Text style={styles.phoneNumberText}> </Text>
          </Text>
        

        <View style={styles.otpContainer}>
          <View style={styles.otpBox}>
            <TextInput
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={firstInput}
              onChangeText={text => {
              setOtp({ ...otp, 1: text });
              text && secondInput.current?.focus();
            }}
            />
         </View>
         <View style={styles.otpBox}>
            <TextInput
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={secondInput}
            onChangeText={text => {
              setOtp({ ...otp, 2: text });
              text ? thirdInput.current?.focus() : firstInput.current?.focus();
            }}
            />
         </View>
         <View style={styles.otpBox}>
            <TextInput
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={thirdInput}
            onChangeText={text => {
              setOtp({ ...otp, 3: text });
              text ? fourthInput.current?.focus() : secondInput.current?.focus();
            }}
            />
         </View>
         <View style={styles.otpBox}>
            <TextInput
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={fourthInput}
              onChangeText={text => {
                setOtp({ ...otp, 4: text });
                text ? fifthInput.current?.focus() : thirdInput.current?.focus();
              }}
            />
         </View>
         <View style={styles.otpBox}>
            <TextInput
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={fifthInput}
              onChangeText={text => {
                setOtp({ ...otp, 5: text });
                text ? sixthInput.current?.focus() : fourthInput.current?.focus();
              }}
            />
         </View>
         <View style={styles.otpBox}>
            <TextInput
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={sixthInput}
            onChangeText={text => {
              setOtp({ ...otp, 6: text });
              !text && fifthInput.current?.focus();
            }}
            />
         </View>

        </View>
        <TouchableOpacity
           onPress={handleVerification}
          style={styles.signinButton}>
          <Text style={styles.signinButtonText}>Verify</Text>
        </TouchableOpacity>

        <View
            style={styles.loginContainer}>
            <Text style={styles.haveResendLabel}>
                  Didn't receive pin ? {'  '}
              <Text 
               style={styles.reendLabel}
               onPress={handleSendAgain}
              >Send again</Text>

            </Text>
        </View>
     </View>
  
  );
};



const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignContent: 'center',
      height: '100%',
      backgroundColor: '#FFFFFF' 
      },
      headerContainer: {
        flexDirection: 'row',
        alignItems: 'center', 
        paddingVertical: 10,
        paddingHorizontal: 20,
      },
      headerTitle: {
        fontSize: 20,
       // fontFamily: Fonts.POPPINS_MEDIUM,
        // lineHeight: 20 * 1.4,
        // width: 100,
        textAlign: 'center',
      },
      title: {
        fontSize: 15,
       // fontFamily: Fonts.POPPINS_MEDIUM,
      // lineHeight: 20 * 1.4,
        // marginTop: 50,
        marginBottom: 20,
        marginHorizontal: 20,
        alignSelf: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        color: '#000000'
        
      },
      sixDigit: {
        fontSize: 22,
        color: '#000000',
        alignSelf: 'center',
        fontWeight: 'bold',

      },
      content: {
        fontSize: 15, 
        color: '#808080',
        alignSelf: 'center',
       // fontFamily: Fonts.POPPINS_MEDIUM,
        marginTop: 20,
        marginBottom: 20,
        marginHorizontal: 20,
      },
      phoneNumberText: {
        fontSize: 18,
      // fontFamily: Fonts.POPPINS_REGULAR,
      // lineHeight: 18 * 1.4,
         color: '#FBA83C',
      },
      otpContainer: {
        marginHorizontal: 20,
        marginBottom: 20,
        marginTop: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        // backgroundColor: '#E74292'
    
      },
      otpBox: {
        borderRadius: 5,
        borderColor: '#2C3335',
        borderWidth: 0.5,
        width: 40,
        backgroundColor: '#EAF0F1'
      },
      otpText: {
        fontSize: 25,
        color: '#0E122B',
        // padding: 0,
        textAlign: 'center',
        // paddingHorizontal: 18,
        // paddingVertical: 10,
      },
      signinButton: {
        // backgroundColor: '#0A8791',
        // borderRadius: 8,
        // marginHorizontal: 20,
        // // height: 10,
        // justifyContent: 'center',
        // alignItems: 'center',
        // marginTop: 20,
        backgroundColor: '#3498DB',
        padding: 10,
        height: 45,
    
        alignSelf: 'center',
        borderRadius: 5,
        width: '60%',
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
      signinButtonText: {
        fontSize: 18,
    //     // lineHeight: 18 * 1.4,
       alignSelf: 'center',
        color: '#FFFFFF'
    //     // // fontFamily: Fonts.POPPINS_MEDIUM,
      },
      loginContainer: {
        marginTop: 35,
      },
      haveResendLabel: {
        color: '#484848',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 15,
      },
      reendLabel: {
        color: '#1d9bf0',
      }

    
})


export default LoginVerification