import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import AppHeader from '../../../components/AppHeader/AppHeader';
import AppInput from '../../../components/AppInput/AppInput';
import Icon from 'react-native-vector-icons/FontAwesome';

const Messages = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: 'white',
      }}>
      <AppHeader title={'Messages'} />
      <View
        style={{
          height: '91%',
          width: '100%',
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            // height: 65,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            borderRadius: 7,
            flexDirection: 'row',
            backgroundColor: '#f6f6f6',
          }}>
          <TextInput
            placeholder="Text here..."
            style={{
              // backgroundColor:'red',
              width: '90%',
              height: 60,
              fontSize: 20,
              paddingHorizontal: 15,
            }}
          />

          <View
            style={{
              width: '10%',
            }}>
            <TouchableOpacity
              style={{
                height: 30,
                width: 30,
                marginRight: 20,
              }}>
              <Icon name={'arrow-circle-up'} size={30} color={'#5DB075'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Messages;
