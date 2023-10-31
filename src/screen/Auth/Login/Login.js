import {View,Text, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import MobText from '../../../components/MobText/MobText';
import MobButton from '../../../components/MobButton/MobButton';
import AppHeader from '../../../components/AppHeader/AppHeader';
import {Checkbox} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AppInput from '../../../components/AppInput/AppInput';
import auth from '@react-native-firebase/auth'



const Login = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      if (!email || !password){
      setErr('enter email and password*')
   
      } else {
        setLoading(true)
await auth().signInWithEmailAndPassword(email,password)
setLoading(false)
 navigation.navigate('App')

      }
    } catch (error) {
      console.log('Error',error)
      setErr(error.message)
    }
   
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      scrollEnabled={true}
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <AppHeader title={'Log In'} />
      <View
        style={{
          flex: 0.3,
        }}>
        <AppInput 
        value={email}
        onChangeText={value=>setEmail(value)}
          flexDirection={'row'}
          label={'Email'}
          placeholder={'Enter your email'}
        />
        <AppInput
        value={password}
        onChangeText={value=>setPassword(value)}
          flexDirection={'row'}
          label={'Password'}
          placeholder={'Enter your password'}
          secureTextEntry={true}
        />
<Text
style={{
  color:'red',
  marginLeft:15,
  fontSize:15,
}}>{err}</Text>

  {loading ? <ActivityIndicator/>: null}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            marginRight: 10,
            marginLeft: 6,
            marginBottom: 20,
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
            fontSize={14}
            fontWeight={'900'}
            label={'Keep me logged In'}
            color={'grey'}
          />
        </View>
        <MobButton onPress={handleLogin} 
        
        label={'Log In'} marginTop={180} />
        <MobText
          onPress={() => navigation.navigate('ForgetPassword')}
          textAlign={'center'}
          label={'Forget your password?'}
          color={'#5DB075'}
          fontSize={16}
        />
      </View>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          // justifyContent: 'flex-end',
          // height: '22%',
          position: 'absolute',
          bottom: 20,
        }}>
        <MobText
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
          fontSize={18}
          textAlign={'center'}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;
