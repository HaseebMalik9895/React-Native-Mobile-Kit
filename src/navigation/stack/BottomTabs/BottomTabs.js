import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feed from '../../../screen/App/Feed/Feed';
import Market from '../../../screen/App/Market/Market';
import Profile from '../../../screen/App/Profile/Profile';
import Messages from '../../../screen/App/Messages/Messages';
import Home from 'react-native-vector-icons/MaterialCommunityIcons';
import Store from 'react-native-vector-icons/FontAwesome5';
import Chat from 'react-native-vector-icons/Ionicons';
import Person from 'react-native-vector-icons/Fontisto';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#5DB075',
        tabBarStyle:{
            height:70,
        },
        tabBarShowLabel:false,
      }}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Home name={'home-outline'} color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Market"
        component={Market}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Store name={'store'} color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Chat name={'chatbubbles'} color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Person name={'person'} color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
