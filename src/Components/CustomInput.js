import React from 'react'
import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CustomInput = (props) => {
    return (
        <View style={{
            marginTop: windowHeight * 0.07,
            marginLeft: windowWidth * 0.1,
            marginRight: windowWidth * 0.2,
        }}>
            <Text style={{
                fontSize: 15,
                fontFamily: 'Poppins-Regular',
                color: 'white',

            }}>{props.label}</Text>
            <TextInput placeholder={props.PHName} placeholderTextColor={'#fff'} keyboardType={props.inputTYPE} autoFocus={props.cusfocus} style={{
                borderColor: '#52a9fe',
                margin: 'auto',
                borderBottomWidth: 1,
                width: windowWidth * 0.8,
                fontSize: 12,
                fontFamily: 'Poppins-Light',
                color: 'white',
            }} />
        </View>
    )
}

export default CustomInput;

const styles = StyleSheet.create({

})
