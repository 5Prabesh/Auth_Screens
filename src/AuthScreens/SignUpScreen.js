import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';

const SignUpScreen = ({navigation}) => {
  return (
    <View>
      <ScrollView>
      <View style={{
        marginLeft: 35,
        marginTop: 50
      }}>
        
        <Text style={{
          fontWeight: 700,
          fontSize: 25,
          color: 'black',
          letterSpacing: 2
        }}>
          Register
        </Text>
      </View>
      <View style={{
        marginTop: 20,
        marginLeft: 35,
      }}>
        <Text style={{
          fontWeight: 500,
          fontSize: 15,
          color: 'black',
          letterSpacing: 2
        }}>Fullname</Text>
        <TextInput style={{
          marginTop: 15,
          backgroundColor: 'white',
          width: '95%',
          borderRadius: 15,
        }}
          placeholder='Enter fullname'
          placeholderTextColor={'grey'}
        />
      </View>

      <View style={{
        marginTop: 20,
        marginLeft: 35,
      }}>
        <Text style={{
          fontWeight: 500,
          fontSize: 15,
          color: 'black',
          letterSpacing: 2
        }}>Email Address</Text>
        <TextInput style={{
          marginTop: 15,
          backgroundColor: 'white',
          width: '95%',
          borderRadius: 15,
        }}
          placeholder='Enter email address'
          placeholderTextColor={'grey'}
        />
      </View>

      <View style={{
        marginTop: 20,
        marginLeft: 35,
      }}>
        <Text style={{
          fontWeight: 500,
          fontSize: 15,
          color: 'black',
          letterSpacing: 2
        }}>Password</Text>
        <TextInput style={{
          marginTop: 15,
          backgroundColor: 'white',
          width: '95%',
          borderRadius: 15,
        }}
          placeholder='Enter password'
          placeholderTextColor={'grey'}
          secureTextEntry={true}
        />
      </View>

      <View style={{
        marginTop: 20,
        marginLeft: 35,
      }}>
        <Text style={{
          fontWeight: 500,
          fontSize: 15,
          color: 'black',
          letterSpacing: 2
        }}>Confirm Password</Text>
        <TextInput style={{
          marginTop: 15,
          backgroundColor: 'white',
          width: '95%',
          borderRadius: 15,
        }}
          placeholder='Confirm Password'
          placeholderTextColor={'grey'}
          secureTextEntry={true}
        />
      </View>
      <View style={{
        marginLeft: 35,
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
          >SignUp</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
      
      <View style={{
        marginTop: 30,
        flexDirection:'row',
        justifyContent:'center'
      }}>
        <Text style={{
          color:'grey'
        }}>
          Already have an account?
        </Text>
        <TouchableOpacity
        onPress={()=>navigation.navigate('LoginScreen')}
        >
          <Text style={{
            color:'#cc93fa'
          }}>
            {'\t'}SignIn
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignUpScreen;