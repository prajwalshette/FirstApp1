// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'


// // navigation
// import {NativeStackScreenProps} from "@react-navigation/native-stack"
// import {RootStackParamList} from '../App'

// type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

// const Home = ({navigation}: HomeProps) => {
//   return (
//     <View>
//       <Text>Home</Text>
//     </View>
//   )
// }

// export default Home

// const styles = StyleSheet.create({})


import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import india from '../assets/india.png'

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Image source={india}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
 