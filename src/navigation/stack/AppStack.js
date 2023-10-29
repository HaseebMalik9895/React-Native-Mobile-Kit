import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyTabs from './BottomTabs/BottomTabs';
import ProfileOptions from '../../screen/App/ProfileOptions/ProfileOptions';
import Profile from '../../screen/App/Profile/Profile';
import Messages from '../../screen/App/Messages/Messages';
import Contacts from '../../screen/App/Contacts/Contacts';

const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="MyTabs"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'MyTabs'} component={MyTabs} />
      <Stack.Screen name={'Profile'} component={Profile} />
      <Stack.Screen name={'Messages'} component={Messages} />
      <Stack.Screen name={'Contacts'} component={Contacts} />
    </Stack.Navigator>
  );
};

export {AppStack};
