import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native'

import Carousel from '../../components/Carousel'



const UserProfile = () => {

    const summary = [
        {
            lock: "My values ...",
            key: "Kindness, family, healthy living, and education"
        },
        {
            lock: "My hobbies ...",
            key: "scuba diving and international cuisine"
        },
        {
            lock: "Instagram (only shown to your adventure matches)",
            key: "@taigeair"
        }
    ]

    const list = () => {
        return summary.map((item) => {
            return (
                <View key={item.key} style={{ padding: 16 }}>
                    <Text style={[styles.keyText, {fontSize: 18}]}>{item.lock}</Text>
                    <Text style={{ color: '#000', fontSize: 18, }}>{item.key}</Text>
                </View>
            )
        })
    }

    return (
        <ScrollView style={styles.profileContainer}>
            <Carousel />
            <Text>Taige, United States, 34</Text>
            <View style={styles.caption}>
                <View>
                    <Text style={styles.roleText}>Character:</Text>
                    <Text style={styles.nameText}>Aladin</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.captionbutton}>
                        <Text style={styles.captionText}>Only Friends</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text style={styles.detailsText}>
                    Most adventurous experience:
                </Text>
                <Text style={styles.detailsText}>
                    My friend and I got stranded in a blizzard when our SUV froze in Iceland!
                </Text>
                <Text style={styles.detailsText}>
                    {'\n'}Top wishes:
                </Text>
                <Text style={styles.detailsText}>
                    Take a year off to explore the world.
                </Text>
                <Text style={styles.detailsText}>
                    Have a family. Create a better life for people around me.
                </Text>
            </View>
            <View>{list()}</View>
            <View>
                <Text style={[styles.keyText, {fontSize: 16, padding: 16}]}>Fairytrail Mode(tell others know you're not open to dating)</Text>
            </View>
            <View>
                
            </View>
        </ScrollView>
    )
}

export default UserProfile

const styles = StyleSheet.create({
    profileContainer: {
        flex: 1,
    },
    profileImage: {
        margin: 20,
        width: '90%',
        height: 300,
        borderRadius: 10,
    },
    caption: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        margin: 20,
    },
    roleText: {
        fontSize: 18,
        color: "#000",
        fontWeight: "bold",
    },
    nameText: {
        fontSize: 24,
        color: "#917BFF",
        fontWeight: "bold",
    },
    captionbutton: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 4,
        backgroundColor: "#E63A8F",
        alignSelf: "flex-start",
        textAlign: "center",
    },
    captionText: {
        color: "#fff",
        fontWeight: "bold",
    },
    detailsText: {
        fontSize: 18,
        color: "#000",
        paddingHorizontal: 16,
    },
    keyText: {
        color: '#88B08F', fontWeight: 'bold',
    }
})
