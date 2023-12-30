
// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// //Navigation
// import {NavigationContainer} from "@react-navigation/native"
// import {createNativeStackNavigator} from "@react-navigation/native-stack"

// //screens
// import Home from './screens/Home';
// import Signup from './screens/Signup';
// import Login from './screens/Login';


// export type RootStackParamList = {
//   Home: undefined;
//   Signup: undefined;
//   Login: undefined
// };

// const Stack = createNativeStackNavigator<RootStackParamList>()

// function App(): JSX.Element {
  

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='Home'>
//         <Stack.Screen
//         name='Home'
//         component={Home}
//         options={{
//           title: "Real Estate"
//         }}
//         />
//         <Stack.Screen
//         name='Signup'
//         component={Signup}
//         options={{
//           title: "Register Account"
//         }}
//         />

//        <Stack.Screen
//         name='Login'
//         component={Login}
//         options={{
//           title: "Login Account"
//         }}
//         />
        
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }



// export default App;













import React from 'react'

import {View,Text,  SafeAreaView } from 'react-native'

//Navigation
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"


import Home from './screens/Home'; 
import Signup from './screens/Signup';
import Login from './screens/Login';
import LoginVerification from './screens/LoginVerification';
import RegisterVerification from './screens/RegisterVerification';
 
export type RootStackParamList = {
  Home: undefined;
  Signup: undefined;
  Login: undefined;
  LoginVerification: { number: string };
  RegisterVerification: {name: string, number: string};
};
 
const Stack = createNativeStackNavigator<RootStackParamList>()

function App (): JSX.Element{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Signup'>
        <Stack.Screen
        name='Signup'
        component={Signup}
        options={{
          title: "Create Account"
        }}
        />
        <Stack.Screen
        name='Home'
        component={Home}
        options={{
          title: "Real Estate"
        }}
        />
        <Stack.Screen
        name='Login'
        component={Login}
        options={{
          title: "Login Account"
        }}
        />
        <Stack.Screen
        name='LoginVerification'
        component={LoginVerification}
        options={{
          title: "Account Verification"
        }}
        />

        <Stack.Screen
        name='RegisterVerification'
        component={RegisterVerification}
        options={{
          title: "Account Verification"
        }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  )


}

export default App;



// import { StyleSheet, Text, View } from 'react-native'
// import React, { useState } from 'react'

// import PhoneInput from 'react-native-phone-number-input'

// const App = () => {

//   const [phoneNumber, setPhoneNumber] = useState('')

//   return (
//     <View style={styles.container}>
//       <Text>Phone Number Input</Text>
//       <PhoneInput
//       placeholder="Enter phone number"
//       defaultValue= {phoneNumber}
//       />
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// })