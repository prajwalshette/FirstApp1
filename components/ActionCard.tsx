import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string){
         Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
         <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in Javascript 21 - ES12
            </Text>
         </View>
         <Image
         source={{
            uri: 'https://www.tots100.co.uk/wp-content/uploads/2018/02/Is-Your-Blog-Due-for-an-Update-1.jpg',
         }}
         style={styles.cardImage}
         />
         <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
                JavaScript is a dynamic, high-level programming language widely employed for web development, enabling interactive and responsive user interfaces. Its versatility extends to server-side (Node.js) and various application domains, making it integral in modern software development.

            </Text>
         </View>
         
         <View style={styles.footerContainer}>
            <TouchableOpacity
            onPress={() => openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}
            >
                <Text style={styles.socialLink}>
                    Read More
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => openWebsite('https://github.com/prajwalshette')}
            >
                <Text style={styles.socialLink}>
                    Follow me
                </Text>
            </TouchableOpacity>
             
         </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    elevatedCard: {
        backgroundColor: '#E07C24',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4

    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600'

    },
    cardImage: {
        height: 190
    },
    bodyContainer: {
        padding: 10,
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    socialLink: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6
    },


})