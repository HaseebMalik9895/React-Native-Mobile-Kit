import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Feed from '../../screen/App/Feed/Feed';
import Market from '../../screen/App/Market/Market';
import MyTabs from './BottomTabs/BottomTabs';
import ProfileOptions from '../../screen/App/ProfileOptions/ProfileOptions';

const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="MyTabs"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'MyTabs'} component={MyTabs} />
    </Stack.Navigator>
  );
};

export {AppStack};
