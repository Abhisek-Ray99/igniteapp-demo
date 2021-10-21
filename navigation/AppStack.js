import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from '../screens/home/Home'
import UserScreen from '../screens/user/User'
import UserProfile from '../screens/user/UserProfile'

const Tab = createBottomTabNavigator();

const UserStack = createStackNavigator();

const UserSetting = () => {
    return (
        <UserStack.Navigator>
            <UserStack.Screen
                name="userprofile"
                component={UserScreen}
                options={{ headerShown: false }}
            />
            <UserStack.Screen
                name="My Profile"
                component={UserProfile}
                options={{
                    headerTitleAlign: 'center',
                }}
            />
        </UserStack.Navigator>
    )
}

const AppStack = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="User"
                component={UserSetting}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    )
}

export default AppStack

const styles = StyleSheet.create({})
