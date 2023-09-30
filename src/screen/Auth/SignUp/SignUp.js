import {View, Text} from 'react-native';
import React, {useState} from 'react';
import MobText from '../../../components/MobText/MobText';
import MobTextinput from '../../../components/MobTextinput/MobTextinput';
import MobButton from '../../../components/MobButton/MobButton';
import {Checkbox} from 'react-native-paper';
import AppHeader from '../../../components/AppHeader/AppHeader';
import AppInput from '../../../components/AppInput/AppInput';
const SignUp = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <AppHeader
        title={'SignUp'}
        onPress={() => {
          navigation.goBack();
        }}
        backArrow={true}
      />
      <View style={{}}>
        <AppInput label={'Name'} placeholder={'Enter your name'} />
        <AppInput label={'Email'} placeholder={'Enter your email'} />
        <AppInput
          label={'Password'}
          placeholder={'Enter your password'}
          secureTextEntry={true}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          marginTop: 32,
          marginRight: 10,
          marginLeft: 6,
          marginBottom: 50,
        }}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
          uncheckedColor={'gray'}
          color={'green'}
        />
        <MobText
          fontWeight={'900'}
          label={
            'I would like to receive your newsletter and other promotional information.'
          }
        />
      </View>
      <MobButton label={'Sign Up'} backgroundColor={'#5DB075'} />

      <View
        style={{
          position: 'absolute',
          bottom: 35,
          alignSelf: 'center',
        }}>
        <MobText
          color={'black'}
          fontSize={16}
          label={'Already have an account?'}
        />
        <MobText
          onPress={() => navigation.navigate('Login')}
          textDecorationLine={'underline'}
          label={'Log in'}
          color={'#5DB075'}
          fontWeight={'bold'}
          fontSize={16}
          paddingHorizontal={30}
          textAlign={'center'}
        />
      </View>
    </View>
  );
};

export default SignUp;
