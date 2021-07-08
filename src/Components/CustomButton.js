import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import LinearGradient from 'react-native-linear-gradient';

const CustomBotton = (props) => {
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['#50adfe', '#784bfe']} style={{
                marginTop: windowHeight * .03,
                paddingTop: 15,
                paddingBottom: 15,
                marginLeft: 30,
                marginRight: 30,
                borderRadius: 100,
                width: windowWidth * 0.4,
                alignSelf: 'center',

            }}>

            <TouchableOpacity
                activeOpacity={.5}
                onPress={props.propsFun}
            >

                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 20,
                        fontFamily: 'Extra-light',
                        color: 'white'
                    }}>
                    {props.text}
                </Text>
            </TouchableOpacity>
        </LinearGradient>

    )
}

export default CustomBotton;

