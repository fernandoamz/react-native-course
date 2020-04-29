import React from 'react';
import { View, Platform } from 'react-native';

const IS_ANDROID_SIZE = Platform.OS === 'android' ? 100 : 'auto';

function Home() {
    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'baseline'
            }}
        >
            <View
                style={{
                    height: IS_ANDROID_SIZE,
                    width: IS_ANDROID_SIZE,
                    backgroundColor: 'powderblue'
                }}
            ></View>
            <View
                style={{
                    height: IS_ANDROID_SIZE,
                    width: IS_ANDROID_SIZE,
                    backgroundColor: 'skyblue'
                }}
            ></View>
            <View
                style={{
                    height: IS_ANDROID_SIZE,
                    width: IS_ANDROID_SIZE,
                    backgroundColor: 'steelblue'
                }}
            ></View>
        </View>
    )
}

export default Home;
