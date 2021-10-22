import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign'


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
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="User"
                component={UserSetting}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="user" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default AppStack

const styles = StyleSheet.create({})
