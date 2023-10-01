import {View, Text} from 'react-native';
import React,{useState}  from 'react';
import AppHeader from '../../../components/AppHeader/AppHeader';
import AppInput from '../../../components/AppInput/AppInput';
import MobButton from '../../../components/MobButton/MobButton';
import {useNavigation} from '@react-navigation/native';
const ForgetPassword = () => {
    const navigation = useNavigation();
    const OTPVerification = () => {
      navigation.navigate('OTPVerification', { value });
    };
const [value , setValue] = useState('')
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
        <AppInput
        value={value}
        onChangeText={text => setValue(text)}
        label={'Email'} placeholder={'Enter your email'} />
      </View>
      <MobButton 
      onPress={OTPVerification}
      label={'Reset Password'} />
    </View>
  );
};

export default ForgetPassword;
