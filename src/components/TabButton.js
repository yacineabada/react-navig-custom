import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

export const CustomButton=({accessibilityState,children,onPress})=>{
    
    var isSelected = accessibilityState.selected;
    if (isSelected) {
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>            
                <TouchableOpacity
                    style={{
                        top: -22.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        backgroundColor: '#4f296e',
                        
                    }}
                    onPress={onPress}
                >
                    {children}
                </TouchableOpacity>
            </View>
        )
    } else {
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    
                   
                }}
                activeOpacity={1}
                onPress={onPress}
            >
                {children}
            </TouchableOpacity>
        )
    }
}
