import {View, Text} from 'react-native';
import React from 'react';
import MobText from '../../../components/MobText/MobText';
import MobTextinput from '../../../components/MobTextinput/MobTextinput';
import MobButton from '../../../components/MobButton/MobButton';

const SignUp = ({navigation}) => {
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
        // justifyContent:'center',
      }}>
    

        <MobText
          color={'black'}
          label={'Sign Up'}
          fontSize={40}
          fontWeight={'bold'}
          textAlign={'center'}
          marginVertical={20}
        />
  
      <MobTextinput
        //   backgroundColor={'red'}
        placeholder={'Name'}
        label={'Name'}
      />
      <MobTextinput
        //   backgroundColor={'blue'}
        placeholder={'Email'}
        label={'Email'}
      />
      <MobTextinput
        //   backgroundColor={'yellow'}
        placeholder={'Password'}
        label={'Password'}
        
      />
      <MobText
        marginLeft={40}
        marginVertical={20}
        label={
          'I would like to receive your newsletter and other promotional information.'
        }
      />
      <MobButton label={'Sign Up'} backgroundColor={'#5DB075'} />

      <View
      style={{
        position:'absolute',
        bottom:24
      }}><MobText
        color={'black'}
        fontSize={16}
        label={'Already have an account?'}
        marginVertical={5}
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
      /></View>
      
    </View>
    </View>
   
  );
};

export default SignUp;
