import {View, Text, Image} from 'react-native';
import React from 'react';
import AppHeader from '../../../components/AppHeader/AppHeader';
import AppInput from '../../../components/AppInput/AppInput';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import MobButton from '../../../components/MobButton/MobButton';

const OTPVerification = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {value} = route.params;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <AppHeader
        onPress={() => {
          navigation.goBack();
        }}
        title={'OTP Verification'}
        backArrow={true}
      />
      <View
        style={{
          // backgroundColor:'yellow',
          maxWidt: '95%',
          height: '20%',
          marginHorizontal: 15,
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 20,
        }}>
        <Image
          source={require('../../../assets/images/mobile.webp')}
          resizeMode={'cover'}
          style={{
            height: 90,
            width: 60,
          }}
        />
        <Text
          style={{
            fontSize: 25,
            fontWeight: 800,
            color: 'black',
          }}>
          OTP Verification
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 800,
            color: 'grey',
          }}>
          Enter OTP code send to {value}?
        </Text>
      </View>
      <View
        style={{
          flex: 0.95,
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <AppInput
          inputContainerStyle={{
            width: '100%',
            borderRadius: 180,
          }}
          inputStyle={{
            alignItems: 'center',
            justifyContent: 'center',
            left: 8,
          }}
          maxLength={1}
          keyboardType={'numeric'}
        />
        <AppInput
          maxLength={1}
          keyboardType={'numeric'}
          inputContainerStyle={{
            width: '100%',
            borderRadius: 180,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          inputStyle={{
            alignItems: 'center',
            justifyContent: 'center',
            left: 8,
          }}
        />
        <AppInput
          maxLength={1}
          keyboardType={'numeric'}
          inputContainerStyle={{
            width: '100%',
            borderRadius: 180,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          inputStyle={{
            alignItems: 'center',
            justifyContent: 'center',
            left: 8,
          }}
        />
        <AppInput
          maxLength={1}
          keyboardType={'numeric'}
          inputContainerStyle={{
            width: '100%',
            borderRadius: 180,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          inputStyle={{
            alignItems: 'center',
            justifyContent: 'center',
            left: 8,
          }}
        />
      </View>
      <MobButton
        onPress={() => navigation.navigate('ChangePassword')}
        label={'Reset password'}
      />
    </View>
  );
};

export default OTPVerification;
