import { View, Text, Image } from 'react-native';
import React, { useEffect, useState } from 'react';

const SplashScreen = ({ navigation }) => {

    const [isvisible, setIsVisible] = useState(true);

    useEffect(() => {
        const Timer = setTimeout(() => {
            setIsVisible(false);
            navigation.navigate('LoginScreen');
        }, 2000);

        return () => clearTimeout(Timer);
    }, [navigation])

    if (!isvisible) {
        return null;
    }

    return (

        <View style={{
            flex: 1
        }}>
            <View style={{
                marginTop: '30%',
                alignContent: 'center',
                alignItems: 'center'
            }}>
                <Image source={require('../assets/Logo/wolf.png')} style={{
                    height: '80%',
                    width: '70%'
                }} />
            </View>
            <Text style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 40,
                textAlign: 'center',
                fontFamily: 'cursive'
            }}>
                Welcome
            </Text>
        </View>
    );
};

export default SplashScreen