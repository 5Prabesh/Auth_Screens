import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useCallback } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import InputField from '../Components/TextInput';
import CustomButton from '../Components/CustomButton';


const ForgotPasswordScreen = ({navigation}) => {
  const handleOtpRedirection = useCallback(
    () => {
      navigation.navigate('OtpScreen')
    },
    [navigation],
  )
  
  return (
    <View style={{
      marginLeft: 30
    }}>
      <View style={{
        marginTop: 30,
      }}>
        <TouchableOpacity
        onPress={()=>navigation.goBack()}
          activeOpacity={0.5}
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
          color:'black',
          fontSize: 25,
          fontWeight:'bold',
          letterSpacing: 1
        }}>Forgot Password</Text>
      </View>
      <View style={{
        marginTop: 20,
      }}>
        <Text style={{
          color:'black',
          fontSize: 15,
          letterSpacing:1,
          fontWeight: '500',
        }}>
          Enter email address
        </Text>
        
        <InputField 
        placeholder={'Enter email address'}
        />
      </View>
      <View style={{
        marginTop: 30
      }}>
        
        <CustomButton 
        label={'Confirm'}
        onPress={()=>handleOtpRedirection()}
        />
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;