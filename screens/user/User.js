import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const UserScreen = ({navigation}) => {
    return (
        <View style={styles.userContainer}>
            <TouchableOpacity style={styles.touchcontainer} onPress={() => navigation.navigate('My Profile')}>
                <Text style={styles.userText}>User Screen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default UserScreen

const styles = StyleSheet.create({
    userContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    touchcontainer: {
        backgroundColor: '#7EB9B1',
    },
    userText: {
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#000',
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontWeight: 'bold',
        color: '#000'
    }
})
