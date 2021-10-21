import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HomeScreen = () => {
    return (
        <View style={styles.homeContainer}>
            <Text style={styles.homeText}>home screen</Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    homeContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    homeText: {
        fontSize: 20,
        color: '#000'
    }
})
