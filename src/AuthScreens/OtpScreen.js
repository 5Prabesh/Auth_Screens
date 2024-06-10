import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import React, { useRef, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


const OtpScreen = ({ navigation }) => {
    const input1Ref = useRef(null);
    const input2Ref = useRef(null);
    const input3Ref = useRef(null);
    const input4Ref = useRef(null);

    const handleInputChange = (text, ref) => {
        if(text.length === 1) {
            ref.current.focus();
        }
    }

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
                    Enter OTP
                </Text>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
                marginRight: 40

            }}>
                <TextInput style={{
                    height: '100%',
                    width: '20%',
                    backgroundColor: 'white',
                    borderRadius: 10,
                    textAlign: 'center',
                    borderWidth: 1,
                    borderColor: 'grey'
                }}
                    keyboardType='number-pad'
                    maxLength={1}
                    ref={input1Ref}
                    onChangeText={text => handleInputChange(text, input2Ref)}
                />
                <TextInput style={{
                    height: '100%',
                    width: '20%',
                    backgroundColor: 'white',
                    borderRadius: 10,
                    textAlign: 'center',
                    borderWidth: 1,
                    borderColor: 'grey'
                }}
                    keyboardType='number-pad'
                    maxLength={1}
                    ref={input2Ref}
                    onChangeText={text => handleInputChange(text, input3Ref)}
                />
                <TextInput style={{
                    height: '100%',
                    width: '20%',
                    backgroundColor: 'white',
                    borderRadius: 10,
                    textAlign: 'center',
                    borderWidth: 1,
                    borderColor: 'grey'
                }}
                    keyboardType='number-pad'
                    maxLength={1}
                    ref={input3Ref}
                    onChangeText={text => handleInputChange(text, input4Ref)}
                />
                <TextInput style={{
                    height: '100%',
                    width: '20%',
                    backgroundColor: 'white',
                    borderRadius: 10,
                    textAlign: 'center',
                    borderWidth: 1,
                    borderColor: 'grey'
                }}
                    keyboardType='number-pad'
                    maxLength={1}
                    ref={input4Ref}
                />
            </View>
            <View style={{
                marginTop: 30

            }}>
                <TouchableOpacity
                    onPress={()=>navigation.navigate('ChangePasswordScreen')}
                    activeOpacity={0.7}
                    style={{
                        height: 50,
                        width: '95%',
                        backgroundColor: '#cc93fa',
                        borderRadius: 15,
                        alignContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text style={{
                        color: 'black',
                        fontWeight: 500,
                        fontSize: 15,
                        marginTop: 15,
                        letterSpacing: 1
                    }}>
                        Verify
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default OtpScreen;

