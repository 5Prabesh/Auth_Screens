import React from "react";

import { View, Text, TouchableOpacity, Image } from "react-native";

export default function CustomButton(
    {
        onPress,
        label,
        
    }
) {

    return (
        <TouchableOpacity
            onPress={onPress}
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
                    color: 'white',
                    fontWeight: 500,
                    fontSize: 15,
                    marginTop: 15,
                    letterSpacing: 1
                }}
            >{label}</Text>
        </TouchableOpacity>
    );
};