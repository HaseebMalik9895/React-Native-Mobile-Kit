import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screen/Auth/Login/Login';
import SignUp from '../../screen/Auth/SignUp/SignUp';
import Feed from '../../screen/App/Feed/Feed';
import Market from '../../screen/App/Market/Market';

const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
    <Stack.Navigator
    initialRouteName='Feed'
    screenOptions={{
      headerShown:false,
    }}>
      <Stack.Screen name={'Feed'} component={Feed} />
      <Stack.Screen name={'Market'} component={Market} />
    </Stack.Navigator>
  );
};

export {AppStack};
