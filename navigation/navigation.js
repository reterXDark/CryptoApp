import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../src/Screens/SplashScreen/SplashScreen';
import AccountDetails from '../src/Screens/AccountDetails/AccountDetails';
import BalanceScreen from '../src/Screens/BalanceScreen/BalanceScreen';
import AmountScreen from '../src/Screens/AmountScreen/AmountScreen'
const Stack = createStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MainScreen" headerMode='none'>
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="AccountDetails" component={AccountDetails} />
                <Stack.Screen name="BalanceScreen" component={BalanceScreen} />
                <Stack.Screen name="AmountScreen" component={AmountScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation;