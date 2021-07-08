import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import CustomBotton from "../../Components/CustomButton";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import LogoImage from '../../../Images/main.png';

const MainScreen = (props) => {
    const RoutNext = () => {
        props.navigation.navigate('AccountDetails')
    }
    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.logoContainer}>
                <Image resizeMode={'contain'} source={LogoImage} style={{
                    width: windowWidth * 1.0,
                    height: windowHeight * 0.40,
                }} />
            </View>
            <View style={styles.mainTextContainer}>
                <View>
                    <TouchableOpacity activeOpacity={.5}>
                        <Text style={{
                            color: 'white',
                            textAlign: 'center',
                            marginTop: windowHeight * 0.04,
                            fontSize: 20,
                            fontFamily: 'Poppins-Light'
                        }}>Create Your Account</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{
                        color: 'white',
                        textAlign: 'center',
                        marginTop: windowHeight * 0.03,
                        marginLeft: windowWidth * 0.15,
                        marginRight: windowWidth * 0.15,
                        fontSize: 16,
                        flexWrap: 'wrap',
                        fontFamily: 'Poppins-Light'
                    }}>Deserunt laboris. Proident commodo exercitation ad labore veniam duis ut.Sit aliqua ipsum aliquip est consectetur.</Text>
                </View>
            </View>
            <View>
                <CustomBotton text={'GET STARTED'} propsFun={RoutNext} />

            </View>
            <View>
                <Text style={{
                    color: 'white',
                    textAlign: 'center',
                    marginTop: windowHeight * 0.03,
                    marginLeft: windowWidth * 0.15,
                    marginRight: windowWidth * 0.15,
                    fontSize: 16,
                    flexWrap: 'wrap',
                    fontFamily: 'Poppins-Light'
                }}>Don't Have Account?</Text>
            </View>
            <View>
                <TouchableOpacity activeOpacity={.5}>
                    <Text style={{
                        color: '#beb0d9',
                        textAlign: 'center',
                        textDecorationLine: 'underline',
                        fontSize: 17,
                        fontFamily: 'Poppins-Light'
                    }}>Signup Here</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default MainScreen;

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#1E2C4F'
    },
    logoContainer: {
        height: windowHeight * 0.35,
        width: windowWidth * 1.0,
    },
    logoText: {
        // backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        marginTop: windowHeight * 0.20,
        fontSize: 50,
        fontFamily: 'Poppins-Bold',

    },
    mainTextContainer: {
        height: windowHeight * 0.25,
        width: windowWidth * 1.0,
        marginTop: windowHeight * 0.15
    }
})

