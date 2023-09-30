import {View, Text} from 'react-native';
import React from 'react';
import MobText from '../../../components/MobText/MobText';
import MobTextinput from '../../../components/MobTextinput/MobTextinput';
import MobButton from '../../../components/MobButton/MobButton';

const Login = ({navigation}) => {
  return (

    <View
    style={{
      flex:1,
      backgroundColor:'white',
    }}>
       <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        marginHorizontal:15,
      }}>
      <MobText
        label={'Log In'}
        color={'black'}
        fontSize={40}
        fontWeight={'bold'}
        textAlign={'center'}
        marginVertical={20}
      />

      <MobTextinput label={'Email'} placeholder={'Email'} />
      <MobTextinput label={'Password'} placeholder={'Password'} />

      <MobButton
        onPress={() => navigation.navigate('App', {screen: 'Feed'})}
        label={'Log In'}
        marginTop={180}
      />
      <MobText
        label={'Forget your password?'}
        color={'#5DB075'}
        fontSize={16}
      />

      <View
        style={{
          position: 'absolute',
          bottom: 24,
        }}>
        <MobText
          marginVertical={5}
          label={"Don't have an account?"}
          color={'black'}
          fontSize={16}
        />
        <MobText
          onPress={() => navigation.navigate('SignUp')}
          textDecorationLine={'underline'}
          label={'Sign Up'}
          color={'#5DB075'}
          fontWeight={'bold'}
          fontSize={16}
          textAlign={'center'}
        />
      </View>
    </View>
    </View>
   
  );
};

export default Login;
