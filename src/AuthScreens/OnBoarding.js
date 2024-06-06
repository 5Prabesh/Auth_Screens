import { View, Text, Image,TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'

const OnBoarding = ({ navigation }) => {
    return (

        <View style={{
            flex: 1
        }}>
            <View style={{
                marginTop: '20%',
                alignContent: 'center',
                alignItems: 'center'
            }}>
                <Image source={require('../assets/Logo/wolf.png')} style={{
                    height: '65%',
                    width: '50%'
                }} />
            </View>
            <Text style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 25,
                textAlign: 'center',
                letterSpacing:4
            }}>
                We Deliver pet{'\n'} products worldwide
            </Text>
            <Text style={{
                color:'black',
                fontWeight: 400,
                fontSize: 15,
                textAlign: 'center',
                letterSpacing: 3
            }}>
                {'\n'}Delivery on time is our commitment
            </Text>
            <View style={{
                alignItems:'flex-end',
                marginTop: 20,
                marginRight: 20,
            }}>
                <TouchableOpacity 
                activeOpacity={0.1} 
                onPress={()=>navigation.navigate('LoginScreen')}
                style={{
                    height: 45,
                    width: 45,
                    borderColor:'black',
                    borderRadius: 45,
                    borderWidth:1,
                    backgroundColor:'#cbdbf5'
                }}>
                    <Icon name = 'chevron-right' style={{
                        color:'black',
                        fontSize: 25,
                        marginTop:10,
                        marginLeft: 14,
                    }}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default OnBoarding;