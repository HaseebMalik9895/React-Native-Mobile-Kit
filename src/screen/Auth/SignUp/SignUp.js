import {View, Text} from 'react-native';
import React, {useState} from 'react';
import MobText from '../../../components/MobText/MobText';
import MobTextinput from '../../../components/MobTextinput/MobTextinput';
import MobButton from '../../../components/MobButton/MobButton';
import {Checkbox} from 'react-native-paper';
import AppHeader from '../../../components/AppHeader/AppHeader';
import AppInput from '../../../components/AppInput/AppInput';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Feather';

const SignUp = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  const [modal, setModal] = useState(false);
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
        <AppInput
          flexDirection={'row'}
          label={'Name'}
          placeholder={'Enter your name'}
        />
        <AppInput
          flexDirection={'row'}
          label={'Email'}
          placeholder={'Enter your email'}
        />
        <AppInput
          label={'Password'}
          placeholder={'Enter your password'}
          secureTextEntry={true}
          flexDirection={'row'}
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
        color={'grey'}
          fontWeight={'900'}
          label={
            'I would like to receive your newsletter and other promotional information.'
          }
        />
      </View>
      <MobButton
        onPress={() => {
          setModal(true);
        }}
        label={'Sign Up'}
        backgroundColor={'#5DB075'}
      />

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
          fontSize={18}
          paddingHorizontal={30}
          textAlign={'center'}
        />
      </View>
      <Modal
        animationIn={'slideInUp'}
        animationOut={'slideOutUp'}
        isVisible={modal}>
        {/* <AppHeader
          backArrow={true}
          onPress={() => {
            setModal(false);
          }}
        /> */}
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              height: 350,
              width: '90%',
              backgroundColor: '#5DB075',
              borderRadius: 20,
              alignItems: 'center',
              // paddingTop:30,
              justifyContent: 'space-evenly',
            }}>
              <View style={{alignItems:'center'}}>
            <Icon name={'check-circle'} size={60} color={'#fff'} />
            <Text
              style={{
                color: 'white',
                fontSize: 30,
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Congratulations!
            </Text>
            </View>
            <MobButton
        onPress={() => {
          setModal(false)
          navigation.navigate('Login')
        }}
        color={"#5DB075"}
        label={'Login'}
        backgroundColor={'#fff'}
      />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SignUp;
