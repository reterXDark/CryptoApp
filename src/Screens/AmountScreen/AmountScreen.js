import React from 'react'
import { View, Text, ScrollView, ImageBackground, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import User from 'react-native-vector-icons/Feather';
import Bell from 'react-native-vector-icons/MaterialCommunityIcons';
import LogoImage from '../../../Images/bg-common.png';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const BalanceScreen = (props) => {
    return (
        <ScrollView style={styles.mainConatiner}>
            <View style={styles.bgcommonContainer}>
                <ImageBackground resizeMode={'contain'} source={LogoImage} style={{
                    width: windowWidth * 1.0,
                    height: windowHeight * 0.40,
                }}>
                    <View style={styles.TopContainer}>
                        <TouchableOpacity activeOpacity={.5} >
                            <View style={styles.backArrow}>
                                <Icon name="left" size={30} color="#fff" style={{
                                    height: windowHeight * 0.06,
                                    width: windowWidth * 0.1,
                                    marginTop: windowHeight * 0.04,
                                    marginLeft: windowWidth * 0.02
                                }} onPress={() => props.navigation.goBack()} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.5} >
                            <View style={styles.backArrow}>
                                <User name="user" size={30} color="#fff" style={{
                                    height: windowHeight * 0.06,
                                    width: windowWidth * 0.1,
                                    marginTop: windowHeight * 0.04,
                                    marginLeft: windowWidth * 0.5,
                                    marginRight: windowWidth * 0.1
                                }} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.5} >
                            <View style={styles.backArrow}>
                                <Bell name="bell" size={30} color="#fff" style={{
                                    height: windowHeight * 0.06,
                                    width: windowWidth * 0.1,
                                    marginTop: windowHeight * 0.04,
                                    marginLeft: windowWidth * 0.45
                                }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.BalanceViewContainer}>
                        <View>
                            <Text style={{
                                marginTop: windowHeight * 0.02,
                                textAlign: 'center',
                                color: 'white',
                                fontSize: 40,
                                fontFamily: 'Poppins-Black'
                            }}>$156.76</Text>
                        </View>
                        <View>
                            <Text style={{
                                textAlign: 'center',
                                color: 'white',
                                fontSize: 20,
                                fontFamily: 'Poppins-Thin',

                            }}>
                                Amount
                            </Text>
                        </View>
                    </View>

                </ImageBackground>
            </View>
            <View style={styles.infoContainerBottom}>
                <View style={{
                    // backgroundColor: 'tomato',
                    borderBottomWidth: 3,
                    borderBottomWidth: 1,
                    borderBottomColor: 'lightblue',
                    marginTop: windowHeight * 0.02,
                    marginLeft: windowWidth * 0.05,
                    width: windowWidth * 0.8,
                    height: windowHeight * 0.06,
                    flexDirection: 'row'
                }}>
                    <Text style={{
                        fontFamily: 'Poppins-Light',
                        color: 'white',
                        marginLeft: windowWidth * 0.02,
                        marginTop: windowHeight * 0.02
                    }}>Cardname</Text>
                    <Text style={{
                        fontFamily: 'Poppins-Light',
                        color: 'white',
                        marginLeft: windowWidth * 0.3,
                        marginTop: windowHeight * 0.02,

                    }}>Classic Payooner</Text>
                </View>
                <View style={{
                    // backgroundColor: 'tomato',
                    borderBottomWidth: 3,
                    borderBottomWidth: 1,
                    borderBottomColor: 'lightblue',
                    marginTop: windowHeight * 0.02,
                    marginLeft: windowWidth * 0.05,
                    width: windowWidth * 0.8,
                    height: windowHeight * 0.06,
                    flexDirection: 'row'
                }}>
                    <Text style={{
                        fontFamily: 'Poppins-Light',
                        color: 'white',
                        marginLeft: windowWidth * 0.02,
                        marginTop: windowHeight * 0.02
                    }}>Cardholder</Text>
                    <Text style={{
                        fontFamily: 'Poppins-Light',
                        color: 'white',
                        marginLeft: windowWidth * 0.3,
                        marginTop: windowHeight * 0.02,

                    }}>Moanic Fox</Text>
                </View>
                <View style={{
                    // backgroundColor: 'tomato',
                    borderBottomWidth: 3,
                    borderBottomWidth: 1,
                    borderBottomColor: 'lightblue',
                    marginTop: windowHeight * 0.02,
                    marginLeft: windowWidth * 0.05,
                    width: windowWidth * 0.8,
                    height: windowHeight * 0.06,
                    flexDirection: 'row'
                }}>
                    <Text style={{
                        fontFamily: 'Poppins-Light',
                        color: 'white',
                        marginLeft: windowWidth * 0.02,
                        marginTop: windowHeight * 0.02
                    }}>Cardname</Text>
                    <Text style={{
                        fontFamily: 'Poppins-Light',
                        color: 'white',
                        marginLeft: windowWidth * 0.3,
                        marginTop: windowHeight * 0.02,

                    }}>Classic Payooner</Text>
                </View>
                <View style={{
                    // backgroundColor: 'tomato',
                    borderBottomWidth: 3,
                    borderBottomWidth: 1,
                    borderBottomColor: 'lightblue',
                    marginTop: windowHeight * 0.02,
                    marginLeft: windowWidth * 0.05,
                    width: windowWidth * 0.8,
                    height: windowHeight * 0.06,
                    flexDirection: 'row'
                }}>
                    <Text style={{
                        fontFamily: 'Poppins-Light',
                        color: 'white',
                        marginLeft: windowWidth * 0.02,
                        marginTop: windowHeight * 0.02
                    }}>Cardname</Text>
                    <Text style={{
                        fontFamily: 'Poppins-Light',
                        color: 'white',
                        marginLeft: windowWidth * 0.3,
                        marginTop: windowHeight * 0.02,

                    }}>Classic Payooner</Text>
                </View>
                <View style={{
                    // backgroundColor: 'tomato',
                    borderBottomWidth: 3,
                    borderBottomWidth: 1,
                    borderBottomColor: 'lightblue',
                    marginTop: windowHeight * 0.02,
                    marginLeft: windowWidth * 0.05,
                    width: windowWidth * 0.8,
                    height: windowHeight * 0.06,
                    flexDirection: 'row'
                }}>
                    <Text style={{
                        fontFamily: 'Poppins-Light',
                        color: 'white',
                        marginLeft: windowWidth * 0.02,
                        marginTop: windowHeight * 0.02
                    }}>Cardname</Text>
                    <Text style={{
                        fontFamily: 'Poppins-Light',
                        color: 'white',
                        marginLeft: windowWidth * 0.3,
                        marginTop: windowHeight * 0.02,

                    }}>Classic Payooner</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default BalanceScreen;

const styles = StyleSheet.create({
    mainConatiner: {
        flex: 1,
        backgroundColor: '#1d2a4a'
    },
    TopContainer: {

        flexDirection: 'row',
        // backgroundColor: 'tomato',
        width: windowWidth * 1.0,
        height: windowHeight * 0.1,
    },
    backArrow: {
        alignSelf: 'center',
        width: windowWidth * 0.2,
        height: windowWidth * 0.3
    },
    BalanceViewContainer: {
        // backgroundColor: 'blue',
        width: windowWidth * 1.0,
        height: windowHeight * 0.28,
    },
    cardContainer: {
        backgroundColor: '#667db1',
        marginLeft: windowWidth * 0.05,
        height: windowHeight * 0.3,
        width: windowWidth * 0.9,
        borderRadius: 40,
        elevation: 5,
        marginTop: windowHeight * 0.01,
    },
    litteCard: {
        backgroundColor: '#1f2d52',
        height: windowHeight * 0.07,
        width: windowWidth * 0.2,
        borderRadius: 23,
        marginLeft: windowWidth * 0.6,
        marginTop: windowHeight * 0.02
    },
    CardNumberConatainer: {
        // backgroundColor: 'lightblue',
        marginTop: windowHeight * 0.02,
        marginLeft: windowWidth * 0.1,
        height: windowHeight * 0.1,
        width: windowWidth * 0.7
    },
    cardInfoContainer: {
        flexDirection: 'row',
        // backgroundColor: 'tomato',
        height: windowHeight * 0.072,
        width: windowWidth * 0.75,
        marginLeft: windowWidth * 0.069,
        marginRight: windowWidth * 0.069,

    },
    infoContainerBottom: {
        backgroundColor: '#667db1',
        marginTop: windowHeight * 0.09,
        width: windowWidth * 0.9,
        height: windowHeight * 0.50,
        marginLeft: windowWidth * 0.05,
        marginRight: windowWidth * 0.05,
        borderRadius: 7
    },
    bgcommonContainer: {
        height: windowHeight * 0.35,
        width: windowWidth * 1.0,
    },
})