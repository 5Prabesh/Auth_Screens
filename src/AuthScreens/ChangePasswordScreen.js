import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import InputField from '../Components/TextInput';

const ChangePasswordScreen = ({ navigation }) => {
    return (
        <View style={{
            marginLeft: 30
        }}>
            <View style={{
                marginTop: 30,
            }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    activeOpacity={0.7}
                    style={{
                        height: 45,
                        width: 45,
                        borderColor: 'black',
                        borderRadius: 15,
                        borderWidth: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Icon name='chevron-left' style={{
                        fontSize: 25,
                        color: 'black',
                    }} />
                </TouchableOpacity>
            </View>
            <View style={{
                marginTop: 30,
            }}>
                <Text style={{
                    color: 'black',
                    fontSize: 25,
                    fontWeight: 'bold',
                    letterSpacing: 1
                }}>
                    Change Password
                </Text>
            </View>
            <View style={{
                marginTop: 15,
            }}>
                <Text style={{
                    fontWeight: 500,
                    fontSize: 15,
                    color: 'black',
                    letterSpacing: 2,

                }}>
                    Enter new password
                </Text>
                <View style={{
                    // marginTop: 15
                }}>
                    
                    <InputField 
                    placeholder={'Enter new password'}
                    secureTextEntry={true}
                    />
                </View>
            </View>
            <View style={{
                marginTop: 15,
            }}>
                <Text style={{
                    fontWeight: 500,
                    fontSize: 15,
                    color: 'black',
                    letterSpacing: 2,

                }}>
                    Confirm new password
                </Text>
                <View style={{
                    // marginTop: 15
                }}>
                    
                    <InputField 
                    placeholder={'Confirm new password'}
                    secureTextEntry={true}
                    />
                </View>
            </View>
            <View style={{
                marginTop: 25
            }}>
            <TouchableOpacity
          onPress={()=>navigation.navigate('LoginScreen')}
          activeOpacity={0.7}
          style={{
            height: 50,
            width: '95%',
            backgroundColor: '#cc93fa',
            borderRadius: 15,
            alignContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: 'black',
              fontWeight: 500,
              fontSize: 15,
              marginTop: 15,
              letterSpacing: 1
            }}
          >Confirm</Text>
        </TouchableOpacity>
            </View>
        </View>
    )
}

export default ChangePasswordScreen;