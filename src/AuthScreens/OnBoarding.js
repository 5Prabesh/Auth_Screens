import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'

const OnBoarding = ({ navigation }) => {
    return (

        <View style={{
            // flex: 1
        }}>
            <View style={{
                marginTop: 30,
                alignContent: 'center',
                alignItems: 'center'
            }}>
                <Image source={require('../assets/Image/wolf.png')} style={{
                    height: '67%',
                    width: '55%'
                }}
                />
            </View>
            <Text style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 25,
                textAlign: 'center',
                letterSpacing: 4
            }}>
                We Deliver pet{'\n'} products worldwide
            </Text>
            <Text style={{
                color: 'black',
                fontWeight: 400,
                fontSize: 15,
                textAlign: 'center',
                letterSpacing: 3
            }}>
                {'\n'}Delivery on time is our commitment
            </Text>
            <View style={{
                marginTop: 30,
                paddingHorizontal: 40
            }}>
                <View style={{
                    width: '100%',
                    flexDirection: 'row'
                }}>
                    <TouchableOpacity 
                    activeOpacity={0.7}
                    onPress={()=>navigation.navigate('LoginScreen')}
                    style={{
                        width: '50%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingVertical: 16,
                        backgroundColor: '#cf83f2',
                        borderTopLeftRadius: 15,
                        borderBottomLeftRadius: 15,
                    }}>
                        <Text style={{
                            color: 'black',
                            fontWeight: 500,
                            fontSize: 14,
                        }}>
                            Login
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    activeOpacity={0.7}
                    onPress={()=>navigation.navigate('SignUpScreen')}
                    style={{
                        width: '50%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingVertical: 16,
                        borderColor: '#cf83f2',
                        borderWidth: 3,
                        // backgroundColor: 'white',
                        borderTopRightRadius: 15,
                        borderBottomRightRadius: 15,
                    }}>
                        <Text style={{
                            color: 'black',
                            fontWeight: 500,
                            fontSize: 14,
                        }}>
                            Register
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>


        </View>
    );
};

export default OnBoarding;