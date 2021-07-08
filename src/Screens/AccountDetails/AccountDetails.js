import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native'
import CustomInput from '../../Components/CustomInput';
import CustomBotton from '../../Components/CustomButton';
import CheckBox from '@react-native-community/checkbox';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;





const AccountDetails = (props) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const RoutNext = () => {
        props.navigation.navigate('BalanceScreen')
    }
    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.AccountDetailsHeadingContainer}>
                <Text style={styles.AccountDetailsHeading}>
                    Account Details
                </Text>
            </View>
            <View style={styles.inputContainer}>
                <CustomInput label={'Name'} PHName={'Your Name'} cusfocus={true} inputTYPE={'name-phone-pad'} />
                <CustomInput label={'Email Address'} PHName={'Your Email'} inputTYPE={'email-address'} />
                <CustomInput label={'Password'} PHName={'Create Your Password'} inputTYPE={'visible-password'} />
            </View>
            <View style={styles.CheckBoxCOntainer}>
                <CheckBox style={{ marginLeft: windowHeight * 0.04 }}
                    disabled={false}

                    onCheckColor={'#52a9fe'}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)

                    }
                />
                <Text style={{
                    marginTop: windowHeight * 0.01,
                    marginLeft: windowWidth * 0.02,
                    fontFamily: 'Poppins-Light',
                    color: 'white'

                }}>I agree with Terms & Conditions</Text>
            </View>
            <View>
                <CustomBotton text={'NEXT'} propsFun={RoutNext} />
            </View>
        </ScrollView>
    )
}

export default AccountDetails;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#1d2a4a'
    },
    AccountDetailsHeadingContainer: {
        flex: 1,
        // backgroundColor: 'tomato',
        height: windowHeight * 0.21,
        width: windowWidth * 1.0
    },
    AccountDetailsHeading: {
        marginTop: windowHeight * 0.14,
        textAlign: 'center',
        fontSize: 35,
        fontFamily: 'Poppins-Bold',
        color: '#FFF',
        // backgroundColor: 'black',
    },
    inputContainer: {
        // backgroundColor: 'gold',
        width: windowWidth * 1.0,
        height: windowHeight * 0.5
    },
    CheckBoxCOntainer: {
        flex: 1,
        flexDirection: 'row',
    }


})
