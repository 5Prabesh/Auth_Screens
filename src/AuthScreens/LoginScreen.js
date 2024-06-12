import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import InputField from '../Components/TextInput';
import CustomButton from '../Components/CustomButton';

const LoginScreen = ({navigation}) => {
  return (
    <View>
      <ScrollView>
        <View style={{
          marginLeft: 35,
          marginTop: 60
        }}>
          <Text style={{
            fontWeight: 700,
            fontSize: 25,
            color: 'black',
            letterSpacing: 2
          }}>
            Login
          </Text>
          <Text style={{
            marginTop: 10,
            fontWeight: 400,
            fontSize: 20,
            color: 'black',
            letterSpacing: 2
          }}>
            Welcome back to the app
          </Text>
        </View>
        <View style={{
          marginLeft: 35,
          marginTop: 50
        }}>
          <Text style={{
            color: 'black',
            letterSpacing: 1,
            fontWeight: 'bold',
            fontSize: 15,
            letterSpacing:1
          }}>
            Email address
          </Text>

          <InputField 
          placeholder={'Enter email address'}
          />

          <Text style={{
            marginTop: 15,
            color: 'black',
            letterSpacing: 1,
            fontWeight: 'bold',
            fontSize: 15,
            letterSpacing:1
          }}>Password</Text>
         
          <InputField 
          placeholder={'Enter Password'}
          secureTextEntry={true}
          />

          <View style={{
            marginTop: 15
          }}>
            <TouchableOpacity 
            activeOpacity={0.7}
            onPress={()=>navigation.navigate('ForgotPasswordScreen')}
            >
              <Text>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{
          marginTop: 15,
          marginLeft: 35,
        }}>
          
{/* login button */}
          <CustomButton 
          label={'Login'}
          onPress={()=>{}}
          />


        </View>
        </ScrollView>
        <View style={{
                marginTop: 25,
                // marginLeft: 25,
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <View style={{
                    backgroundColor: 'grey',
                    height: 1,
                    flex: 1,
                    marginLeft: 25
                }} />

                <Text style={{
                    // paddingHorizontal:5,
                    // alignSelf:'center',
                    marginLeft: 10,
                    marginRight: 10,
                    fontSize: 15,
                    letterSpacing:1
                }}>
                    OR
                </Text>

                <View style={{
                    backgroundColor: 'grey',
                    height: 1,
                    flex: 1,
                    marginRight: 25
                }} />
            </View>

            <View style={{
              marginTop: 20,
              marginLeft:35
            }}>
              <TouchableOpacity
                    activeOpacity={0.3}
                    style={{
                        width: '95%',
                        borderRadius: 15,
                        backgroundColor: '#dcd9de',
                        alignContent: 'center',
                        alignItems: 'center',
                        paddingVertical: 20,
                    }}>
                    <Image source={require('../assets/Image/google.png')} style={{
                        position: 'absolute',
                        width: 30,
                        height: 30,
                        left: 35,
                        top: 14,
                    }} />
                    <Text style={{
                        color: 'black',
                        fontWeight: '500'
                    }}>
                        Continue with Google
                    </Text>
                </TouchableOpacity>
                
            </View>

      <View style={{
        marginTop: 25,
        flexDirection:'row',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Text style={{
          color:'grey'
        }}>Don't have account?{'\t'}</Text>
        <TouchableOpacity
        onPress={()=>navigation.navigate('SignUpScreen')}
        >
          <Text style={{
            color:'#cc93fa'
          }}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default LoginScreen;