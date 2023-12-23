import React from "react";

import { 
    Text, 
    View,
    StyleSheet,
    useColorScheme
} from 'react-native'

function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'dark'
     return(
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.whiteText :
            styles.whiteText}>
                Prajwal Shette
            </Text>

        </View>
     )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    whiteText:{
        color: '#FFFFFF'
    },
    darkText: {
        color: '#000000'
    }

})

export default AppPro