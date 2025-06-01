import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Video from 'react-native-video';

const SplashScreen = ({ onFinish }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            onFinish();
        }, 1000); 
        return () => clearTimeout(timeout);
    }, []);

    return (
        <View style={styles.container}>

            <Video
                source={require('../assets/traya_splash.mp4')}
                style={styles.backgroundVideo}
                muted={true}
                repeat={false}
                resizeMode={"cover"}
                rate={1.0}
                ignoreSilentSwitch={"obey"}

            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    backgroundVideo: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

export default SplashScreen;
