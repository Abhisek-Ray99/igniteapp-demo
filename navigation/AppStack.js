import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
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
                    headerRight: () => (
                        <Pressable
                            onPress={() => alert('Save successfully!')}
                            style={styles.button}
                        >
                            <Text style={styles.text}>Save</Text>
                        </Pressable>
                    ),
                }}

            />
        </UserStack.Navigator>
    )
}

const AppStack = () => {

    const getTabBarVisibility = (route) => {
        const routeName = getFocusedRouteNameFromRoute(route) ?? '';
        if (routeName === 'My Profile') {
            return false;
        }
        return true;
    };

    return (
        <Tab.Navigator
            initialRouteName="Home"
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={() => ({
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                })}
            />
            <Tab.Screen
                name="User"
                component={UserSetting}
                options={({ route }) => ({
                    tabBarVisible: getTabBarVisibility(route),
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="user" color={color} size={size} />
                    ),
                })}
            />
        </Tab.Navigator>
    )
}

export default AppStack

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: 25,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#1487C6',
        marginRight: 16,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
})
