import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screen/Auth/Login/Login';
import SignUp from '../../screen/Auth/SignUp/SignUp';
import Feed from '../../screen/App/Feed/Feed';
import ForgetPassword from '../../screen/Auth/ForgetPassword/ForgetPassword';
import OTPVerification from '../../screen/Auth/OTPVerification/OTPVerification';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Login'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'SignUp'} component={SignUp} />
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'ForgetPassword'} component={ForgetPassword} />
      <Stack.Screen name={'OTPVerification'} component={OTPVerification} />
    </Stack.Navigator>
  );
};

export default AuthStack;
