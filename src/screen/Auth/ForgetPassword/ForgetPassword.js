import {View, Text} from 'react-native';
import React from 'react';
import AppHeader from '../../../components/AppHeader/AppHeader';
import AppInput from '../../../components/AppInput/AppInput';
import MobButton from '../../../components/MobButton/MobButton';

const ForgetPassword = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <AppHeader
        title={'Forgot Password'}
        onPress={() => {
          navigation.goBack();
        }}
        backArrow={true}
      />
      <View
        style={{
          marginHorizontal: 15,
          marginVertical: 20,
        }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: 'black',
            marginBottom: 10,
          }}>
          Forgot Your Password?
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '800',
            color: 'black',
            marginBottom: 10,
          }}>
          No worries, we'll help you reset it.
        </Text>
      </View>
      <View
        style={{
          flex: 0.95,
        }}>
        <AppInput label={'Email'} placeholder={'Enter your email'} />
      </View>
      <MobButton label={'Reset Password'} />
    </View>
  );
};

export default ForgetPassword;
