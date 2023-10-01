import {View, Text} from 'react-native';
import React from 'react';
import AppHeader from '../../../components/AppHeader/AppHeader';
import AppInput from '../../../components/AppInput/AppInput';
import MobButton from '../../../components/MobButton/MobButton';

const ChangePassword = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <AppHeader
        title={'Change Password'}
        backArrow={true}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View
        style={{
          justifyContent: 'center',
          height: 80,
          marginHorizontal: 15,
        }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: 'black',
            marginBottom: 10,
          }}>
          Create New Password
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '800',
            color: 'black',
            marginBottom: 10,
          }}>
          Please enter a new password to secure your account.
        </Text>
      </View>
      <View
        style={{
          flex: 0.95,
        }}>
        <AppInput
          label={'New Password'}
          placeholder={'Enter new password'}
          flexDirection={'row'}
        />
        <AppInput
          label={'Confirm New Password'}
          placeholder={'Enter confirm new password'}
          flexDirection={'row'}
        />
      </View>
      <MobButton
        onPress={() => navigation.navigate('Login')}
        label={'Set New Password'}
      />
    </View>
  );
};

export default ChangePassword;
