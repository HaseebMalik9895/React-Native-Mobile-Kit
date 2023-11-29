import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import AppHeader from '../../../components/AppHeader/AppHeader';
import Account from 'react-native-vector-icons/Entypo';
import Messages from 'react-native-vector-icons/Ionicons';

const ProfileOptions = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 15,
      }}>
      <AppHeader title={'Settings'} />

      <TouchableOpacity
onPress={()=>navigation.navigate('Profile')}

        style={{
          height: 110,
          width: '100%',
          backgroundColor: '#f6f6f6',
          flexDirection: 'row',
          paddingVertical: 25,
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
        }}>
        <Image
          source={require('../../../assets/images/person.png')}
          resizeMode={'cover'}
          style={{
            height: 70,
            width: '20%',
          }}
        />
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
              marginLeft: 10,
            }}>
            Victoria Robertson
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: 'black',
              marginLeft: 10,
              marginTop: 5,
            }}>
            A mantra goes here
          </Text>
        </View>
      </TouchableOpacity>

      <View 
      style={{marginVertical: 10,}}>
        <TouchableOpacity
          style={{
            height: 60,
            width: '100%',
            backgroundColor: '#f6f6f6',
            marginBottom: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 40,
              width: 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Account name={'key'} size={20} color={'black'} />
          </View>
          <Text
            style={{
              fontSize: 15,
              color: 'black',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            Account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Conversation')}
          style={{
            height: 60,
            width: '100%',
            backgroundColor: '#f6f6f6',
            marginBottom: 1.5,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 40,
              width: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Messages name={'chatbubbles'} size={20} color={'black'} />
          </View>
          <Text 
            style={{
              fontSize: 15,
              color: 'black',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            Chat
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 60,
            width: '100%',
            backgroundColor: '#f6f6f6',
            flexDirection: 'row',
            marginBottom: 1.5,
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 40,
              width: 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Account name={'lock'} size={20} color={'black'} />
          </View>
          <Text
            style={{
              fontSize: 15,
              color: 'black',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            Privacy
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 60,
            width: '100%',
            backgroundColor: '#f6f6f6',
            flexDirection: 'row',
            marginBottom: 1.5,
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 40,
              width: 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Account name={'notification'} size={20} color={'black'} />
          </View>
          <Text
            style={{
              fontSize: 15,
              color: 'black',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            Notifications
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 30,
          width: '50%',
        alignSelf:'center',
          position: 'absolute',
          bottom: 40,
        }}>
          <Text
          style={{
            color:'grey',
            fontSize:20,
            fontWeight:'bold',
            alignSelf:'center',
          }}>Urban Cart</Text>
        </View>
    </View>
  );
};

export default ProfileOptions;
