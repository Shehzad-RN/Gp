import React from 'react';
import { View, StyleSheet, ActivityIndicator, Image } from 'react-native';

const SplashScreen = () => {
    return (
        <View style={styles.splashContainer}>
            <Image
                source={require('../Assets/IMages/login1.png')}
                style={styles.brand}
            />
            <ActivityIndicator color={'#000'} size={20} style={styles.loading} />
        </View>
    );
}

const styles = StyleSheet.create({
    splashContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    brand: {
        width: 150,
        height: 150,
        borderColor: '#000',
        resizeMode: 'cover'
    },
    loading: {
        position: 'relative',
        top: -30
    }
})

export default SplashScreen;
