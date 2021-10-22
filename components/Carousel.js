import React from 'react';
import Carousel from 'react-native-banner-carousel';
import { StyleSheet, Image, View} from 'react-native';

const BannerWidth = 380;
const BannerHeight = 300;

const images = [
    "https://source.unsplash.com/user/erondu",
    "https://source.unsplash.com/user/erondu",
    "https://source.unsplash.com/user/erondu"
];

export default class App extends React.Component {
    renderPage(image, index) {
        return (
            <View key={index}>
                <Image style={[ styles.imgSec, { width: BannerWidth, height: BannerHeight }]} source={{ uri: image }} />
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Carousel
                    loop={false}
                    index={0}
                    pageSize={BannerWidth}
                >
                    {images.map((image, index) => this.renderPage(image, index))}
                </Carousel>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginVertical: 10
    },
    imgSec: {
        borderRadius: 15
    }
});