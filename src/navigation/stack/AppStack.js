import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Feed from '../../screen/App/Feed/Feed';
import Market from '../../screen/App/Market/Market';
import FilterManu from '../../screen/App/FilterManu/FilterManu';
import MyTabs from './BottomTabs/BottomTabs';

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
