import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import InputField from '../Components/TextInput';
import CustomButton from '../Components/CustomButton';

const SignUpScreen = ({ navigation }) => {
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
          
          <InputField
            placeholder={'Enter Fullname'}
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
          
          <InputField
            placeholder={'Enter email address'}
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
          
          <InputField
            placeholder={'Enter password'}
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
          
          <InputField
            secureTextEntry={true}
            placeholder={'Confirm password'}
          />
        </View>
        <View style={{
          marginLeft: 35,
          marginTop: 25
        }}>
          
{/* signup button */}
          <CustomButton
          label={'SignUp'}
          onPress={()=>navigation.navigate('LoginScreen')}
          />
        </View>
      </ScrollView>

      <View style={{
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'center'
      }}>
        <Text style={{
          color: 'grey'
        }}>
          Already have an account?
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
        >
          <Text style={{
            color: '#cc93fa'
          }}>
            {'\t'}SignIn
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignUpScreen;