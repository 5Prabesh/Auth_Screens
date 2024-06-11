import React from "react";

import { View,TextInput } from "react-native";

export default function InputField({
    placeholder,secureTextEntry
}){
 return(
    <View>
        <TextInput 
        placeholder={placeholder}
        placeholderTextColor={'grey'}
        secureTextEntry={secureTextEntry}
        style={{
            marginTop: 10,
            backgroundColor: 'white',
            width: '95%',
            borderRadius: 15,
        }}
        />
    </View>
 );
};